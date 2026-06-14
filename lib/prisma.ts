import { PrismaClient } from "@prisma/client";

// Prevents creating a new Prisma Client on every hot-reload in development,
// which would otherwise exhaust your database connection limit.

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["error", "warn"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
