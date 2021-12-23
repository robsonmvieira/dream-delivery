import { BadRequestError } from '@/domain/modules/core/errors'
import { ProductDTO, ProductResponse } from '@/domain/modules/products/dtos'
import { ICreateProductRepository } from '@/domain/modules/products/ports'
import { PrismaClient } from '@prisma/client'

export class CreateProductPrismaRepository implements ICreateProductRepository {
  prisma: PrismaClient
  constructor () {
    this.prisma = new PrismaClient()
  }

  async create (productDTO: ProductDTO): Promise<ProductResponse| BadRequestError> {
    const productExists = await this.prisma.product.findFirst({
      where: {
        name: productDTO.name
      },
      select: { name: true }
    }
    )

    if (productExists != null) {
      return new BadRequestError('The product already exists')
    }

    return this.prisma.product.create({ data: productDTO })
  }
}
