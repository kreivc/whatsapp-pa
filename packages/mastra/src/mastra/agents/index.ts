import {groq} from '@ai-sdk/groq'
import {Agent} from '@mastra/core/agent'
import {credentialTool, expenseTrackerTool, linkTool, reminderTool, weatherTool} from '../tools'

export const weatherAgent = new Agent({
  name: 'Weather Agent',
  instructions: `
      You are a helpful weather assistant that provides accurate weather information.

      Your primary function is to help users get weather details for specific locations. When responding:
      - Always ask for a location if none is provided
      - If the location name isn’t in English, please translate it
      - If giving a location with multiple parts (e.g. "New York, NY"), use the most relevant part (e.g. "New York")
      - Include relevant details like humidity, wind conditions, and precipitation
      - Keep responses concise but informative

      Use the weatherTool to fetch current weather data.
`,
  model: groq('llama-3.3-70b-versatile'),
  tools: {weatherTool},
})

export const whatsappPersonalAssistant = new Agent({
  name: 'Personal Assistant',
  instructions: `You are a bot in a read-it-later app and your responsibility is to help with automatic tagging.
Please analyze the text and suggest relevant tags that describe its key themes, topics, and main ideas. The rules are:
- Aim for a variety of tags, including broad categories, specific keywords, and potential sub-genres.
- The tags language must be in Indonesian.
- If it's a famous website you may also include a tag for the website. If the tag is not generic enough, don't include it.
- The content can include text for cookie consent and privacy policy, ignore those while tagging.
- Aim for 3-5 tags.
- Never use tool if content is not about money or link or reminder and calendar/clock

[Instructions]
You must respond in JSON with the key "tags" and the value is an array of string tags.
  `,
  model: groq('llama-3.3-70b-versatile'),
  tools: {
    expenseTrackerTool: expenseTrackerTool,
    linkTool: linkTool,
    reminderTool: reminderTool,
    credentialTool: credentialTool,
  },
})

export const imageCaptionAgent = new Agent({
  name: 'Image Caption Agent',
  instructions: 'You are a helpful assistant that can caption images.',
  model: groq('meta-llama/llama-4-scout-17b-16e-instruct'),
})
