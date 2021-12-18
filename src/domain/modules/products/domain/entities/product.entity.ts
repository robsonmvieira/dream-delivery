import { Entity } from '@/domain/modules/core/base-classes'

export class Product extends Entity {
  sku: string
  name: string
  price: number
  category: string
  categoryId: string
  description: string

  constructor (data: Partial<Product>) {
    super()

    if (data !== undefined) {
      Object.assign(this, data)
    }
  }
}
