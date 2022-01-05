
import { ListSupplierController } from '@/application/controllers/suppliers'
import { listSuppliersUseCaseFactory } from '@/infrastructure/factories/usecases/'

export const listSupplierControllerFactory = (): ListSupplierController => {
  const useCase = listSuppliersUseCaseFactory()

  return new ListSupplierController(useCase)
}
