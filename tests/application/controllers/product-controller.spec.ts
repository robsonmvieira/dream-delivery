import { InternalServerError } from '@/domain/modules/core/errors'
import { IListAllProductRepository } from '@/domain/modules/products/ports'
import { mock, MockProxy } from 'jest-mock-extended'

class ProductController {
  constructor (private readonly listAllProductRepository: IListAllProductRepository) {}
  async handler (): Promise<HttpResponse> {
    const response = await this.listAllProductRepository.list()

    if (response instanceof InternalServerError) {
      return {
        statusCode: 500,
        data: new InternalServerError('Something went wrong. Try again later')
      }
    }
    return {
      statusCode: 200,
      data: response
    }
  }
}

export type HttpResponse = {
  statusCode: number
  data: any
}
describe('ProductController', () => {
  let repo: MockProxy<IListAllProductRepository>
  let sut: ProductController

  beforeEach(() => {
    repo = mock()
    repo.list.mockResolvedValue([{
      id: '1',
      name: 'Maça verde',
      description: 'Pura maça argentina',
      price: 14.5,
      category: 'frutas',
      categoryId: '1',
      sku: '23651'
    }])
    sut = new ProductController(repo)
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
    expect(response.data.length).toBe(1)
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
