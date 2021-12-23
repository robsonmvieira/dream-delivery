import { Product } from '../domain/entities'
import { ProductDTO } from '@/domain/modules/products/dtos'
export class ProductMapper {
  static fromEntityToObject (entity: Product): ProductDTO {
    return {
      id: entity.getid(),
      sku: entity.sku,
      name: entity.name,
      price: entity.price,
      category: entity.category,
      categoryId: entity.categoryId,
      description: entity.description
    }
  }
}
