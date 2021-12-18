import { Product } from '@/domain/modules/products/database'
import { ProductResponse } from '@/domain/modules/products/dtos'
import { IListAllProductRepository } from '@/domain/modules/products/ports'

import { IBackup, newDb } from 'pg-mem'
import { getConnection, getRepository, Repository } from 'typeorm'

class ListAllProductRepository implements IListAllProductRepository {
  async list (): Promise<ProductResponse[]> {
    const pgProduct = getRepository(Product)

    return pgProduct.find()
  }
}

describe('Pg', () => {
  let sut: ListAllProductRepository
  let productRepo: Repository<Product>
  let backup: IBackup

  beforeAll(async () => {
    const db = newDb()
    const connection = await db.adapters.createTypeormConnection({
      type: 'postgres',
      entities: [Product]
    })
    await connection.synchronize()
    backup = db.backup()
    // create schema
    productRepo = getRepository(Product)
  })

  beforeEach(() => {
    backup.restore()
    sut = new ListAllProductRepository()
  })

  afterAll(async () => {
    await getConnection().close()
  })

  it('should returns productResponse List', async () => {
    const product = {
      id: '1',
      name: 'Maça verde',
      description: 'Pura maça argentina',
      price: 14.5,
      category: 'frutas',
      categoryId: '1',
      sku: '23651'
    }

    await productRepo.save(product)

    const result = await sut.list()
    expect(result.length).toBe(1)
  })

  it('should returns empty List if no registers in database', async () => {
    const result = await sut.list()
    expect(result.length).toBe(0)
  })
})
