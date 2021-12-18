import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
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
