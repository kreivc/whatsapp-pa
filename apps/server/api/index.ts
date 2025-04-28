import {Hono} from 'hono'
import {handle} from 'hono/vercel'
import {WhatsAppService} from '../whatsapp/service'
// Remove dotenv import which uses Node.js modules not available in Edge
// import {config as dotenvConfig} from 'dotenv'
// import {mastra} from '@repo/mastra'
// import {insertCredential, insertExpense, insertLink, insertReminder} from '@repo/database'

export const config = {
  runtime: 'edge',
  // Add Vercel environment variables to be available in Edge
  env: ['WHATSAPP_TOKEN', 'WHATSAPP_PHONE_NUMBER_ID', 'WHATSAPP_VERIFY_TOKEN'],
}

// Remove dotenv config call
// dotenvConfig()

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
        // Simple fallback response when mastra is not available in Edge
        content = `I received your message: "${message.text?.body || ''}". I'm currently running in Edge mode with limited capabilities.`

        // For development environment only - Mastra functionality
        if (process.env.NODE_ENV === 'development') {
          try {
            // Dynamic import to avoid Edge Function issues
            const {mastra} = await import('@repo/mastra')
            const personalAssistant = mastra.getAgent('whatsappPersonalAssistant')
            const response = await personalAssistant.generate([
              {
                role: 'user',
                content: message.text?.body || '',
              },
            ])

            const tool = response.response.messages.filter((m: {role: string}) => m.role === 'tool')
            let toolName = ''
            let result = {}
            if (tool && tool.length > 0) {
              const toolCall = tool[0].content[0] as {
                toolName: string
                result: Record<string, unknown>
              }
              toolName = toolCall.toolName
              result = toolCall.result
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
          } catch (err) {
            console.error('Mastra import error:', err)
          }
        }
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

handle(app)
