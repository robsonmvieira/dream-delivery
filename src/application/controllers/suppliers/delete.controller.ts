import { DeleteSupplierUseCase } from '@/domain/modules/admin/suppliers/usecases'

// import { NotFoundException } from '@/domain/modules/core/errors'
import { Request, Response } from 'express'
export class DeleteSupplierController {
  constructor (private readonly createSupplierUseCase: DeleteSupplierUseCase) {}

  async handler (req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    await this.createSupplierUseCase.perform(id)

    return res.status(200).json()
  }
}
