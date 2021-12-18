import { ProductResponse } from '@/domain/modules/products/dtos'
import { InternalServerError } from '@/domain/modules/core/errors'

export interface IListAllProductRepository {
  list: () => Promise<ProductResponse[] | InternalServerError>
}
