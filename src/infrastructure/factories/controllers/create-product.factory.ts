import { CreateProductController } from '@/application/controllers'
import { createProductUseCaseFactory } from '@/infrastructure/factories/usecases'
export const createProductControllerFactory = (): CreateProductController => {
  return new CreateProductController(createProductUseCaseFactory())
}
