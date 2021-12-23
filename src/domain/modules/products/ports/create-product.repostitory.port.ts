import { ProductDTO, ProductResponse } from '@/domain/modules/products/dtos'
import { BadRequestError } from '@/domain/modules/core/errors'

export interface ICreateProductRepository {
  create: (productDTO: ProductDTO) => Promise<ProductResponse | BadRequestError>
}
