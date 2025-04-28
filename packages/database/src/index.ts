import {prisma} from './client'

export const insertExpense = async (name: string, amount: number) => {
  await prisma.expenseTracker.create({
    data: {
      name,
      amount,
    },
  })
}

export const insertLink = async (name: string, url: string) => {
  await prisma.link.create({
    data: {
      summary: name,
      url,
    },
  })
}

export const insertReminder = async (event: string, date: string) => {
  await prisma.reminders.create({
    data: {
      title: event,
      description: date,
    },
  })
}

export const insertCredential = async (name: string, credentials: string) => {
  await prisma.credentials.create({
    data: {
      name,
      secret: credentials,
    },
  })
}
