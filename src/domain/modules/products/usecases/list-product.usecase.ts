import { ProductResponse } from '@/domain/modules/products/dtos'
import { IListAllProductRepository } from '@/domain/modules/products/ports'

export class ListProductsUseCase {
  constructor (private readonly listAllProductRepository: IListAllProductRepository) {}
  async perform (): Promise<ProductResponse[]> {
    return this.listAllProductRepository.list()
  }
}
