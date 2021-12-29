import { IListSuppliersRepository } from '@/domain/modules/admin/suppliers/ports'
import { InternalServerError } from '@/domain/modules/core/errors'
import { SupplierResponse } from '@/domain/modules/admin/suppliers/dtos'

export class ListSupplayerUseCase {
  constructor (private readonly listSuppliersRepo: IListSuppliersRepository) {}

  async perform (): Promise<SupplierResponse[] | InternalServerError> {
    return this.listSuppliersRepo.listSuppliers()
  }
}
