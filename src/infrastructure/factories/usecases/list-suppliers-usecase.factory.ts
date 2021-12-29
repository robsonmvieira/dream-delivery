import { ListSupplayerUseCase } from '@/domain/modules/admin/suppliers/usecases'

import { listSuppliersPrismaRepositoryFactory } from '@/infrastructure/factories/repositories/admin/supplier/prisma'

export const listSupplayerUseCaseFactory = (): ListSupplayerUseCase => {
  return new ListSupplayerUseCase(listSuppliersPrismaRepositoryFactory())
}
