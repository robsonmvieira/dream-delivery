import { CreateProductPrismaRepository } from '@/infrastructure/repositories/prisma'

export const createProductPrismaRepositoryFactory = (): CreateProductPrismaRepository => new CreateProductPrismaRepository()
