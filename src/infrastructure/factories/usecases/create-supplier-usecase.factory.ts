import { CreateSupplierUseCase } from '@/domain/modules/admin/suppliers/usecases'

import { createSupplierPrismaRepositoryFactory } from '@/infrastructure/factories/repositories/admin/supplier/prisma'

export const createSupplierUseCaseFactory = (): CreateSupplierUseCase => {
  return new CreateSupplierUseCase(createSupplierPrismaRepositoryFactory())
}
