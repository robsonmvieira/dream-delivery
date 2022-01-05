
import { CreateSupplierController } from '@/application/controllers/suppliers'
import { createSupplierUseCaseFactory } from '@/infrastructure/factories/usecases/'

export const createSupplierControllerFactory = (): CreateSupplierController => {
  const useCase = createSupplierUseCaseFactory()

  return new CreateSupplierController(useCase)
}
