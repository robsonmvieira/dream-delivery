import { CreateSupplierUseCase } from '@/domain/modules/admin/suppliers/usecases'

import { BadRequestError } from '@/domain/modules/core/errors'
import { Request, Response } from 'express'
export class CreateSupplierController {
  constructor (private readonly createSupplierUseCase: CreateSupplierUseCase) {}

  async handler (req: Request, res: Response): Promise<Response> {
    const payload = req.body
    const response = await this.createSupplierUseCase.perform(payload)
    return response instanceof BadRequestError
      ? res.status(400).json({ data: response })
      : res.status(200).json({ data: response })
  }
}
