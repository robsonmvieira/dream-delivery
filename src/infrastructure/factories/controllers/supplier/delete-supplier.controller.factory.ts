
import { DeleteSupplierController } from '@/application/controllers/suppliers'
import { deleteSupplierUseCaseFactory } from '@/infrastructure/factories/usecases'

export const deleteSupplierControllerFactory = (): DeleteSupplierController => {
  const useCase = deleteSupplierUseCaseFactory()

  return new DeleteSupplierController(useCase)
}
