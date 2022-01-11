import { DeleteSupplierUseCase } from '@/domain/modules/admin/suppliers/usecases'

import { deleteSupplierPrismaRepositoryFactory } from '@/infrastructure/factories/repositories/admin/supplier/prisma'

export const deleteSupplierUseCaseFactory = (): DeleteSupplierUseCase => {
  return new DeleteSupplierUseCase(deleteSupplierPrismaRepositoryFactory())
}
