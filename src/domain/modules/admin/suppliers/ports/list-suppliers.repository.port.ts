import { InternalServerError } from '@/domain/modules/core/errors'
import { SupplierResponse } from '@/domain/modules/admin/suppliers/dtos'

export interface IListSuppliersRepository {
  listSuppliers: () => Promise<InternalServerError | SupplierResponse[]>
}
