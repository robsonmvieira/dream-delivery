
import { ListAllProductPrismaRepository } from '@/infrastructure/repositories/prisma'

export const listProductPrismaRepositoryFactory = (): ListAllProductPrismaRepository => {
  return new ListAllProductPrismaRepository()
}
