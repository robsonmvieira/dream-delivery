import { ICreateSupplierRepository } from '@/domain/modules/admin/suppliers/ports'

import { SupplierDTO, SupplierResponse } from '@/domain/modules/admin/suppliers/dtos'
import { Supplier } from '@/domain/modules/admin/suppliers/domain'
import { SupplierMapper } from '@/domain/modules/admin/suppliers/database'

export class CreateSupplierUseCase {
  constructor (private readonly createSupplierRepo: ICreateSupplierRepository) {}

  async perform (data: SupplierDTO): Promise<SupplierResponse> {
    const newSupplier = new Supplier(data)
    const obj = Object.assign(newSupplier, { email: newSupplier.getEmail() })
    const payload = SupplierMapper.fromEntityDataBaseToResponse(obj)

    return this.createSupplierRepo.create(payload)
  }
}
