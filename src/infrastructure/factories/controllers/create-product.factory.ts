// import moduleName from '@';
// import { ListProductsUseCase } from '@/domain/modules/products/usecases'

import { CreateProductController } from '@/application/controllers'
import { createProductUseCaseFactory } from '@/infrastructure/factories/usecases'
// import { createProductPrismaRepository } from '@/infrastructure/factories/repositories/products/prisma'

// import { listProductRepositoryFactory } from '@/infrastructure/factories/repositories/products/prisma/typeorm-list-product.factory'
export const createProductControllerFactory = (): CreateProductController => {
  return new CreateProductController(createProductUseCaseFactory())
}
