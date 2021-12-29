import { ListProductController } from '@/application/controllers'
import { ListProductsUseCase } from '@/domain/modules/products/usecases'
import { listProductPrismaRepositoryFactory } from '@/infrastructure/factories/repositories/products/prisma'
export const listProductControllerFactory = (): ListProductController => {
  const repo = listProductPrismaRepositoryFactory()
  const useCase = new ListProductsUseCase(repo)
  return new ListProductController(useCase)
}
