import { InternalServerError } from '@/domain/modules/core/errors'
import { ProductResponse } from '@/domain/modules/products/dtos'
import { IListAllProductRepository } from '@/domain/modules/products/ports'
import { PrismaClient } from '@prisma/client'

export class ListAllProductPrismaRepository implements IListAllProductRepository {
  prisma: PrismaClient
  constructor () {
    this.prisma = new PrismaClient()
  }

  async list (): Promise<ProductResponse[] | InternalServerError> {
    try {
      return await this.prisma.product.findMany()
    } catch (error) {
      return new InternalServerError('Something went wrong. Try again later')
    }
  }
}
