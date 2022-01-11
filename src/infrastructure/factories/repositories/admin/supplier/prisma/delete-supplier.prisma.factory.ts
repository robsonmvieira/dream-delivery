
import { DeleteSupplierPrismaRepository } from '@/infrastructure/repositories/prisma'

export const deleteSupplierPrismaRepositoryFactory = (): DeleteSupplierPrismaRepository => {
  return new DeleteSupplierPrismaRepository()
}
