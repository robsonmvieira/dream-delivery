
import { BadRequestError } from '@/domain/modules/core/errors'
import { CreateProductUseCase } from '@/domain/modules/products/usecases'

import { Request, Response } from 'express'
export class CreateProductController {
  constructor (private readonly createProductUseCase: CreateProductUseCase) {}
  async handler (req: Request, res: Response): Promise<Response> {
    const payload = req.body
    const response = await this.createProductUseCase.perform(payload)

    return response instanceof BadRequestError ? res.status(400).json({ data: response }) : res.status(201).json(response)
  }
}
