import { ProductResponse } from '@/modules/products/dtos'
import { IListAllProductRepository } from '@/modules/products/ports'

export class ListProductsUseCase {
  constructor (private readonly listAllProductRepository: IListAllProductRepository) {}
  async perform (): Promise<ProductResponse[]> {
    return this.listAllProductRepository.list()
  }
}
