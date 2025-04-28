import {PrismaClient} from '../generated/prisma'

// @ts-ignore
const globalForPrisma = global as unknown as {prisma: PrismaClient}

export const prisma = globalForPrisma.prisma || new PrismaClient()

// @ts-ignore
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}
