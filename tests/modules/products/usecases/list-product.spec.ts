import { ListProductsUseCase } from '@/modules/products/usecases/'
import { IListAllProductRepository } from '@/modules/products/ports'

import { mock, MockProxy } from 'jest-mock-extended'
import { InternalServerError } from '@/modules/core/errors'

describe('ListProductUseCase', () => {
  // let listProductUseCase: MockProxy<ListProductsUseCase>
  let listProductsRepo: MockProxy<IListAllProductRepository>
  let sut: ListProductsUseCase

  beforeEach(() => {
    listProductsRepo = mock()

    listProductsRepo.list.mockResolvedValue([{
      id: '1',
      name: 'Maça verde',
      description: 'Pura maça argentina',
      price: 14.5,
      category: 'frutas',
      categoryId: '1',
      sku: '23651'
    }])
    sut = new ListProductsUseCase(listProductsRepo)
  })
  it('should call IListAllProductRepository to load products', async () => {
    const result = await sut.perform()
    expect(result.length).toBe(1)
    expect(sut.perform)
  })

  it('should throw if  IListAllProductRepository failed', async () => {
    listProductsRepo.list.mockRejectedValueOnce(new InternalServerError('Something went wrong. Try again later'))
    const result = sut.perform()
    await expect(result).rejects.toThrow(new InternalServerError('Something went wrong. Try again later'))
  })
})
