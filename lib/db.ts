import { Prisma } from '@/app/generated/prisma/browser'
import {PrismaClient} from '@prisma/client'


const globalForPrisma = globalThis as unknown as {prisma : PrismaClient}

export const prisma = globalForPrisma || new PrismaClient ({
    log : ['query'],
})

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma