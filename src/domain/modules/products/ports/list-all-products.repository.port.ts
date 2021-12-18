import { ProductResponse } from '@/domain/modules/products/dtos'

export interface IListAllProductRepository {
  list: () => Promise<ProductResponse[]>
}
