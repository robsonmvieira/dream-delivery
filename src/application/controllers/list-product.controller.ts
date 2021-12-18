import { HttpResponse, internalServerError, ok } from '@/application/helpers'
import { InternalServerError } from '@/domain/modules/core/errors'
import { IListAllProductRepository } from '@/domain/modules/products/ports'

export class ListProductController {
  constructor (private readonly listAllProductRepository: IListAllProductRepository) {}
  async handler (): Promise<HttpResponse> {
    const response = await this.listAllProductRepository.list()

    if (response instanceof InternalServerError) {
      return internalServerError()
    }
    return ok(response)
  }
}
