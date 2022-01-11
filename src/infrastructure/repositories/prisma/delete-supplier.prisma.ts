import { IDeleteSupplierRepository } from '@/domain/modules/admin/suppliers/ports'
import { NotFoundException } from '@/domain/modules/core/errors'
import { PrismaClient } from '@prisma/client'

export class DeleteSupplierPrismaRepository implements IDeleteSupplierRepository {
  prisma: PrismaClient
  constructor () {
    this.prisma = new PrismaClient()
  }

  async deleteSupplier (id: string): Promise<void> {
    const supplierExists = await this.prisma.supplier.findFirst({ where: { id } })

    if (supplierExists == null) {
      throw new NotFoundException('Supplier not found')
    }

    await this.prisma.supplier.update({
      where: { id },
      data: {
        isDeleted: true
      }
    })
  }
}
