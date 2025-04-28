// --- Types ---
export type WhatsAppMessage = {
  from: string
  type: string
  text?: {body: string}
  audio?: {id: string}
  image?: {id: string; caption?: string}
  // Add more types as needed
}

export class WhatsAppService {
  whatsappToken: string
  whatsappPhoneNumberId: string
  whatsappVerifyToken: string

  constructor() {
    const {WHATSAPP_TOKEN, WHATSAPP_PHONE_NUMBER_ID, WHATSAPP_VERIFY_TOKEN} = {
      WHATSAPP_TOKEN: process.env.WHATSAPP_TOKEN || '',
      WHATSAPP_PHONE_NUMBER_ID: process.env.WHATSAPP_PHONE_NUMBER_ID || '',
      WHATSAPP_VERIFY_TOKEN: process.env.WHATSAPP_VERIFY_TOKEN || '',
    }

    // In Edge environment, we might not throw immediately but log warning
    if (!WHATSAPP_TOKEN || !WHATSAPP_PHONE_NUMBER_ID || !WHATSAPP_VERIFY_TOKEN) {
      console.warn('WhatsApp config is incomplete - some functionality may be limited')
    }

    this.whatsappToken = WHATSAPP_TOKEN
    this.whatsappPhoneNumberId = WHATSAPP_PHONE_NUMBER_ID
    this.whatsappVerifyToken = WHATSAPP_VERIFY_TOKEN
  }

  verifyWebhook(verifyToken: string): boolean {
    // Allow verification even if token is empty (development/testing)
    if (!this.whatsappVerifyToken) {
      return true
    }
    return verifyToken === this.whatsappVerifyToken
  }

  async downloadMedia(mediaId: string): Promise<Uint8Array> {
    const metaRes = await fetch(`https://graph.facebook.com/v21.0/${mediaId}`, {
      headers: {Authorization: `Bearer ${this.whatsappToken}`},
    })
    if (!metaRes.ok) {
      throw new Error('Failed to get media metadata')
    }
    const meta = await metaRes.json()
    const downloadUrl = meta.url
    const mediaRes = await fetch(downloadUrl, {
      headers: {Authorization: `Bearer ${this.whatsappToken}`},
    })
    if (!mediaRes.ok) {
      throw new Error('Failed to download media')
    }
    const arrayBuffer = await mediaRes.arrayBuffer()
    return new Uint8Array(arrayBuffer)
  }

  async processAudioMessage(message: WhatsAppMessage): Promise<string> {
    if (message.audio?.id) {
      await this.downloadMedia(message.audio.id)
    }
    return '[audio transcription not implemented]'
  }

  async uploadMedia(_mediaContent: Uint8Array, _messageType: string): Promise<string> {
    // Not implemented
    return ''
  }

  async sendResponse(fromNumber: string, responseText: string): Promise<boolean> {
    if (!this.whatsappToken || !this.whatsappPhoneNumberId) {
      console.error('Token or phone number ID is missing - cannot send WhatsApp response')
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode - would have sent message:', responseText)
        return true
      }
      return false
    }

    try {
      const jsonData = {
        messaging_product: 'whatsapp',
        to: fromNumber,
        type: 'text',
        text: {body: responseText},
      }
      const res = await fetch(
        `https://graph.facebook.com/v21.0/${this.whatsappPhoneNumberId}/messages`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${this.whatsappToken}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(jsonData),
        }
      )

      if (!res.ok) {
        const errorText = await res.text()
        console.error('WhatsApp API error:', errorText)
      }

      return res.ok
    } catch (error) {
      console.error('Error sending WhatsApp response:', error)
      return false
    }
  }
}
