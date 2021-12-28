import { ListSupplayerUseCase } from '@/domain/modules/admin/suppliers/usecases'

import { InternalServerError } from '@/domain/modules/core/errors'
import { Request, Response } from 'express'
export class ListSupplierController {
  constructor (private readonly listSuppliersUseCase: ListSupplayerUseCase) {}

  async handler (req: Request, res: Response): Promise<Response> {
    const response = await this.listSuppliersUseCase.perform()
    return response instanceof InternalServerError
      ? res.status(500).json({ data: response })
      : res.status(200).json({ data: response })
  }
}
