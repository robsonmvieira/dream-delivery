import { Entity } from '@/domain/modules/core/base-classes'
import { ID } from '@/domain/modules/core/value-objects'

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
      const id = ID.generate()

      if (this.isValidateId(id)) {
        this.id = id
        Object.assign(this, data)
      }
    }
  }

  private isValidateId (newId: string): boolean {
    return ID.validate(newId)
  }
}
