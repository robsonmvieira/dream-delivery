import { ListSuppliersUseCase } from '@/domain/modules/admin/suppliers/usecases'

import { listSuppliersPrismaRepositoryFactory } from '@/infrastructure/factories/repositories/admin/supplier/prisma'

export const listSuppliersUseCaseFactory = (): ListSuppliersUseCase => {
  return new ListSuppliersUseCase(listSuppliersPrismaRepositoryFactory())
}
