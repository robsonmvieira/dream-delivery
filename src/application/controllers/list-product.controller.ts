// import { ProductResponse } from '@/domain/modules/products/dtos'
// import { InternalServerError } from '@/domain/modules/core/errors'
// import { IListAllProductRepository } from '@/domain/modules/products/ports'
// import { HttpResponse, internalServerError, ok } from '@/application/helpers'
import { ListProductsUseCase } from '@/domain/modules/products/usecases'
// import { ListAllProductPrismaRepository } from '@/infrastructure/repositories/prisma'
// import { ListProductsUseCase } from '@/domain/modules/products/usecases'
// import { listProductControllerFactory } from '@/infrastructure/factories/controllers'
import { Request, Response } from 'express'
export class ListProductController {
  constructor (private readonly useCase: ListProductsUseCase) {

  }

  async handler (req: Request, res: Response): Promise<Response> {
    // const repo = new ListAllProductPrismaRepository()
    // const useCase = new ListProductsUseCase(repo)
    const response = await this.useCase.perform()
    // console.log('response => ', response)

    // if (response instanceof InternalServerError) {
    //   console.log('entrei no if')
    //   return internalServerError()
    // } else {
    //   console.log('entrei no else')

    return res.status(200).json({ data: response })
  }
}
