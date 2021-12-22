import { Entity, Column } from 'typeorm'

@Entity('products')
export class Product {
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  price: number

  @Column()
  category: string

  @Column()
  categoryId: string

  @Column()
  sku: string
}
