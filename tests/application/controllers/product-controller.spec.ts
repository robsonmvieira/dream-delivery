import { ListProductController } from '@/application/controllers'
import { InternalServerError } from '@/domain/modules/core/errors'
import { IListAllProductRepository } from '@/domain/modules/products/ports'

import { mock, MockProxy } from 'jest-mock-extended'

describe('ProductController', () => {
  let repo: MockProxy<IListAllProductRepository>
  let sut: ListProductController

  beforeEach(() => {
    repo = mock()
    sut = new ListProductController(repo)

    repo.list.mockResolvedValue([{
      id: '1',
      name: 'Maça verde',
      description: 'Pura maça argentina',
      price: 14.5,
      category: 'frutas',
      categoryId: '1',
      sku: '23651'
    }])
  })

  it('should return of ProductResponse', async () => {
    const response = await sut.handler()

    const expectResponse = {

      statusCode: 200,
      data: [{
        id: '1',
        name: 'Maça verde',
        description: 'Pura maça argentina',
        price: 14.5,
        category: 'frutas',
        categoryId: '1',
        sku: '23651'
      }]
    }
    expect(response).toEqual(expectResponse)
  })

  it('should return InternalServerError if IListAllProductRepository fails', async () => {
    repo.list.mockResolvedValueOnce(new InternalServerError('Something went wrong. Try again later'))
    const response = await sut.handler()

    expect(response).toEqual({
      statusCode: 500,
      data: new InternalServerError('Something went wrong. Try again later')
    })
  })
})
