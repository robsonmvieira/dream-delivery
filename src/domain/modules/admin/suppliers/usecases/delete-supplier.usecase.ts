import { IDeleteSupplierRepository } from '@/domain/modules/admin/suppliers/ports'

export class DeleteSupplierUseCase {
  constructor (private readonly deleteSupplierRepo: IDeleteSupplierRepository) {}

  async perform (id: string): Promise<void> {
    return this.deleteSupplierRepo.deleteSupplier(id)
  }
}
