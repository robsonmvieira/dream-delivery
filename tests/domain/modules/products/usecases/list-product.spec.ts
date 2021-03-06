import { ListProductsUseCase } from '@/domain/modules/products/usecases/'
import { IListAllProductRepository } from '@/domain/modules/products/ports'

import { mock, MockProxy } from 'jest-mock-extended'
import { InternalServerError } from '@/domain/modules/core/errors'

describe('ListProductUseCase', () => {
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
    expect(result).toEqual([{
      id: '1',
      name: 'Maça verde',
      description: 'Pura maça argentina',
      price: 14.5,
      category: 'frutas',
      categoryId: '1',
      sku: '23651'
    }])
    expect(sut.perform)
  })

  it('should throw if  IListAllProductRepository failed', async () => {
    listProductsRepo.list.mockRejectedValueOnce(new InternalServerError('Something went wrong. Try again later'))
    const result = sut.perform()
    await expect(result).rejects.toThrow(new InternalServerError('Something went wrong. Try again later'))
  })
})
