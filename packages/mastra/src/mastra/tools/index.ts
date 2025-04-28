import {createTool} from '@mastra/core/tools'
import {z} from 'zod'

interface GeocodingResponse {
  results: {
    latitude: number
    longitude: number
    name: string
  }[]
}
interface WeatherResponse {
  current: {
    time: string
    temperature_2m: number
    apparent_temperature: number
    relative_humidity_2m: number
    wind_speed_10m: number
    wind_gusts_10m: number
    weather_code: number
  }
}

export const weatherTool = createTool({
  id: 'get-weather',
  description: 'Get current weather for a location',
  inputSchema: z.object({
    location: z.string().describe('City name'),
  }),
  outputSchema: z.object({
    temperature: z.number(),
    feelsLike: z.number(),
    humidity: z.number(),
    windSpeed: z.number(),
    windGust: z.number(),
    conditions: z.string(),
    location: z.string(),
  }),
  execute: async ({context}) => {
    return await getWeather(context.location)
  },
})

const getWeather = async (location: string) => {
  const geocodingUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=1`
  console.log('geocodingUrl', geocodingUrl)
  const geocodingResponse = await fetch(geocodingUrl)
  const geocodingData = (await geocodingResponse.json()) as GeocodingResponse
  console.log('geocodingData', geocodingData)

  if (!geocodingData.results?.[0]) {
    throw new Error(`Location '${location}' not found`)
  }

  const {latitude, longitude, name} = geocodingData.results[0]

  const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_gusts_10m,weather_code`

  console.log('weatherUrl', weatherUrl)

  const response = await fetch(weatherUrl, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
  const data = (await response.json()) as WeatherResponse
  console.log('data', data)

  return {
    temperature: data.current.temperature_2m,
    feelsLike: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    windGust: data.current.wind_gusts_10m,
    conditions: getWeatherCondition(data.current.weather_code),
    location: name,
  }
}

function getWeatherCondition(code: number): string {
  const conditions: Record<number, string> = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Foggy',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    56: 'Light freezing drizzle',
    57: 'Dense freezing drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    66: 'Light freezing rain',
    67: 'Heavy freezing rain',
    71: 'Slight snow fall',
    73: 'Moderate snow fall',
    75: 'Heavy snow fall',
    77: 'Snow grains',
    80: 'Slight rain showers',
    81: 'Moderate rain showers',
    82: 'Violent rain showers',
    85: 'Slight snow showers',
    86: 'Heavy snow showers',
    95: 'Thunderstorm',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail',
  }
  return conditions[code] || 'Unknown'
}

// export const notesTool = createTool({
// 	id: "notes that not about money or link or reminder",
// 	description:
// 		"Save notes if content NOT ABOUT MONEY OR LINK, if another tool is applicable, NEVER use this tool",
// 	inputSchema: z.object({
// 		notes: z.string().describe("Notes"),
// 	}),
// 	outputSchema: z.object({
// 		success: z.boolean(),
// 		message: z.string(),
// 	}),
// 	execute: async ({ context }) => {
// 		// do insert on db
// 		return {
// 			success: true,
// 			message: "Notes saved successfully",
// 		};
// 	},
// });

export const expenseTrackerTool = createTool({
  id: 'expense-tracker',
  description: 'Save expense tracker if no other tool is applicable',
  inputSchema: z.object({
    name: z.string().describe('Name of the expense'),
    amount: z
      .number()
      .describe(
        'Amount of the expense number only cannot be 0, respect simplify like 1k mean 1000 and the currency is IDR'
      ),
  }),
  outputSchema: z.object({
    name: z.string(),
    amount: z.number(),
  }),
  execute: async ({context}) => {
    return {
      name: context.name,
      amount: context.amount,
    }
  },
})

export const linkTool = createTool({
  id: 'domain URL saver',
  description:
    'Save url only if the content having link like http or https or any domain like .com etc',
  inputSchema: z.object({
    name: z.string().describe('Name of the link').optional(),
    url: z.string().describe('Url'),
  }),
  outputSchema: z.object({
    name: z.string(),
    url: z.string(),
  }),
  execute: async ({context}) => {
    // do insert on db
    return {
      name: context.name ?? '',
      url: context.url,
    }
  },
})

export const reminderTool = createTool({
  id: 'reminder saver',
  description: `Save reminder if content contains time-related expressions like 'jam', 'pukul', 'besok', 'hari ini', 'minggu depan', or specific dates/times. Also handles calendar events and appointments. CURRENT DATE IS ${new Date().toLocaleDateString()}, if content doesn't provide AM or PM, it will be PM`,
  inputSchema: z.object({
    event: z.string().describe('Event or activity name'),
    date: z.string().describe('Date in ISO 8601 format UTC +7'),
  }),
  outputSchema: z.object({
    event: z.string(),
    date: z.string(),
  }),
  execute: async ({context}) => {
    return {
      event: context.event,
      date: context.date,
    }
  },
})

export const credentialTool = createTool({
  id: 'credential',
  description: 'Save credential if content contains credential',
  inputSchema: z.object({
    name: z.string().describe('Name of the credential'),
    credentials: z.string().describe('Credential'),
  }),
  outputSchema: z.object({
    name: z.string(),
    credentials: z.string(),
  }),
  execute: async ({context}) => {
    // do insert on db
    return {
      name: context.name,
      credentials: context.credentials,
    }
  },
})
