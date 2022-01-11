import { SupplierMapper } from '@/domain/modules/admin/suppliers/database'
import { SupplierResponse } from '@/domain/modules/admin/suppliers/dtos'
import { IListSuppliersRepository } from '@/domain/modules/admin/suppliers/ports'
import { InternalServerError } from '@/domain/modules/core/errors'

import { PrismaClient } from '@prisma/client'

export class ListAllSuppliersPrismaRepository implements IListSuppliersRepository {
  prisma: PrismaClient
  constructor () {
    this.prisma = new PrismaClient()
  }

  async listSuppliers (): Promise<SupplierResponse[] | InternalServerError> {
    try {
      const initialData = await this.prisma.supplier.findMany({
        where: {
          isDeleted: false
        },
        include: {
          address: true
        }
      })
      return initialData.map(supplier => SupplierMapper.fromPrismaDataBaseToResponse(supplier))
    } catch (error) {
      return new InternalServerError('Something went wrong. Try again later')
    }
  }
}
