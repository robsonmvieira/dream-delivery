import { SupplierResponse } from '@/domain/modules/admin/suppliers/dtos'

export interface ICreateSupplierRepository {
  create: (data: SupplierResponse) => Promise<SupplierResponse>
}
