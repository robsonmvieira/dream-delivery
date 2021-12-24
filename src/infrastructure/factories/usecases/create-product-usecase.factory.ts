import { CreateProductUseCase } from '@/domain/modules/products/usecases'
import { createProductPrismaRepositoryFactory } from '@/infrastructure/factories/repositories/products/prisma'

export const createProductUseCaseFactory = (): CreateProductUseCase => {
  return new CreateProductUseCase(createProductPrismaRepositoryFactory())
}
