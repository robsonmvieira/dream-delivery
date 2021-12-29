
import { ListAllSuppliersPrismaRepository } from '@/infrastructure/repositories/prisma'

export const listSuppliersPrismaRepositoryFactory = (): ListAllSuppliersPrismaRepository => {
  return new ListAllSuppliersPrismaRepository()
}
