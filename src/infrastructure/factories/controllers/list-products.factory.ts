import { ListProductController } from '@/application/controllers'
import { ListProductsUseCase } from '@/domain/modules/products/usecases'
import { listProductRepositoryFactory } from '@/infrastructure/factories/repositories/products/prisma/typeorm-list-product.factory'
export const listProductControllerFactory = (): ListProductController => {
  const repo = listProductRepositoryFactory()
  const useCase = new ListProductsUseCase(repo)
  return new ListProductController(useCase)
}
