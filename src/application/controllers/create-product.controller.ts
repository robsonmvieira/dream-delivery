
import { CreateProductUseCase } from '@/domain/modules/products/usecases'
import { CreateProductPrismaRepository } from '@/infrastructure/repositories/prisma'

import { Request, Response } from 'express'
export class CreateProductController {
  async handler (req: Request, res: Response): Promise<Response> {
    const repo = new CreateProductPrismaRepository()
    const useCase = new CreateProductUseCase(repo)
    const payload = req.body
    const response = await useCase.perform(payload)

    return res.status(201).json({ data: response })
  }
}
