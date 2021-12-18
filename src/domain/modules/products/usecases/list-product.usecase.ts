import { ProductResponse } from '@/domain/modules/products/dtos'
import { InternalServerError } from '@/domain/modules/core/errors'
import { IListAllProductRepository } from '@/domain/modules/products/ports'
export class ListProductsUseCase {
  constructor (private readonly listAllProductRepository: IListAllProductRepository) {}
  async perform (): Promise<ProductResponse[] | InternalServerError> {
    return this.listAllProductRepository.list()
  }
}
