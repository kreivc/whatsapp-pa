import {Hono} from 'hono'
import {serve} from '@hono/node-server'
import {WhatsAppService} from '../whatsapp/service'
import {config as dotenvConfig} from 'dotenv'
import {mastra} from '@repo/mastra'
// import {insertCredential, insertExpense, insertLink, insertReminder} from '@repo/database'

export const config = {
  runtime: 'edge',
}

dotenvConfig()

const app = new Hono()

// --- Types ---
type WhatsAppMessage = {
  from: string
  type: string
  text?: {body: string}
  audio?: {id: string}
  image?: {id: string; caption?: string}
  // Add more types as needed
}

// --- WhatsApp Service ---
const whatsappService = new WhatsAppService()

// --- Routes ---

app.get('/whatsapp_response', c => {
  const url = new URL(c.req.url)
  if (whatsappService.verifyWebhook(url.searchParams.get('hub.verify_token') || '')) {
    return c.text(url.searchParams.get('hub.challenge') || '', 200)
  }
  return c.text('Verification token mismatch', 403)
})

app.post('/whatsapp_response', async c => {
  try {
    const data = await c.req.json()
    const changeValue = data?.entry?.[0]?.changes?.[0]?.value
    if (changeValue?.messages) {
      const message: WhatsAppMessage = changeValue.messages[0]
      const fromNumber = message.from
      let content = ''
      let messageType = 'text'
      if (message.type === 'audio') {
        content = await whatsappService.processAudioMessage(message)
        messageType = 'audio'
      } else if (message.type === 'image') {
        content = message.image?.caption || ''
        if (message.image?.id) {
          await whatsappService.downloadMedia(message.image.id)
        }
      } else {
        const personalAssistant = mastra.getAgent('whatsappPersonalAssistant')
        const response = await personalAssistant.generate([
          {
            role: 'user',
            content: message.text?.body || '',
          },
        ])

        const tool = response.response.messages.filter(m => m.role === 'tool')
        let toolName = ''
        let result = {}
        if (tool && tool.length > 0) {
          const toolCall = tool[0].content[0]
          toolName = toolCall.toolName
          result = toolCall.result as Record<string, unknown>
        }

        switch (toolName) {
          case 'expenseTrackerTool':
            const expenseData = result as {name: string; amount: number}
            const expenseName = expenseData.name
            const expenseAmount = expenseData.amount
            // await insertExpense(expenseName, expenseAmount)
            result = {
              name: expenseName,
              amount: expenseAmount,
            }
            break
          case 'linkTool':
            const linkData = result as {name: string; url: string}
            const linkName = linkData.name
            const linkUrl = linkData.url
            // await insertLink(linkName, linkUrl)
            result = {
              name: linkName,
              url: linkUrl,
            }
            break
          case 'reminderTool':
            const reminderData = result as {event: string; date: string}
            const reminderEvent = reminderData.event
            const reminderDate = reminderData.date
            // await insertReminder(reminderEvent, reminderDate)
            result = {
              event: reminderEvent,
              date: reminderDate,
            }
            break
          case 'credentialTool':
            const credentialData = result as {name: string; credentials: string}
            const credentialName = credentialData.name
            const credentialCredentials = credentialData.credentials
            // await insertCredential(credentialName, credentialCredentials)
            result = {
              name: credentialName,
              credentials: credentialCredentials,
            }
            break
          default:
            break
        }
        console.log('TRACE TOOL', result)

        content = JSON.stringify(result)
      }
      const responseText = content
      await whatsappService.sendResponse(fromNumber, responseText)
      return c.text('Message processed', 200)
    } else if (changeValue?.statuses) {
      return c.text('Status update received', 200)
    } else {
      return c.text('Unknown event type', 400)
    }
  } catch (e) {
    console.error('Error processing message:', e)
    return c.text('Internal server error', 500)
  }
})

const PORT = 3002

console.log(`HONO Server running on port ${PORT}`)

serve({
  fetch: app.fetch,
  port: PORT,
})
