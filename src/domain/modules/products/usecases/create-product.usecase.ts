import { ProductDTO, ProductResponse } from '@/domain/modules/products/dtos'
import { BadRequestError } from '@/domain/modules/core/errors'
import { ICreateProductRepository } from '@/domain/modules/products/ports'
import { Product } from '@/domain/modules/products/domain/entities'
import { ProductMapper } from '@/domain/modules/products/database'
export class CreateProductUseCase {
  constructor (
    private readonly createProductRepository: ICreateProductRepository
  ) {}

  async perform (productRequest: ProductDTO): Promise<ProductResponse | BadRequestError> {
    const productEntity = new Product(
      {
        category: productRequest.category,
        categoryId: productRequest.categoryId,
        description: productRequest.description,
        name: productRequest.name,
        price: productRequest.price,
        sku: productRequest.sku
      })

    const productDto = ProductMapper.fromEntityToObject(productEntity)
    return await this.createProductRepository.create(productDto)
  }
}
