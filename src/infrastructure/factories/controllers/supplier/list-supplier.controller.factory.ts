
import { ListSupplierController } from '@/application/controllers/suppliers'
import { listSupplayerUseCaseFactory } from '@/infrastructure/factories/usecases/'

export const listSupplierControllerFactory = (): ListSupplierController => {
  const useCase = listSupplayerUseCaseFactory()

  return new ListSupplierController(useCase)
}
