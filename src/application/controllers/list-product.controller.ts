import { ListProductsUseCase } from '@/domain/modules/products/usecases'

import { Request, Response } from 'express'
export class ListProductController {
  constructor (private readonly useCase: ListProductsUseCase) {}

  async handler (req: Request, res: Response): Promise<Response> {
    const response = await this.useCase.perform()
    return res.status(200).json(response)
  }
}
