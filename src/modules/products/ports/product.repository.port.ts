import { ProductResponse } from '@/modules/products/dtos'

export interface IListAllProductRepository {
  list: () => Promise<ProductResponse[]>
}
