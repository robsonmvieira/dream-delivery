
import { CreateSupplierPrismaRepository } from '@/infrastructure/repositories/prisma'

export const createSupplierPrismaRepositoryFactory = (): CreateSupplierPrismaRepository => {
  return new CreateSupplierPrismaRepository()
}
