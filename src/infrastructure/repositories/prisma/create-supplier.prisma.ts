import { SupplierMapper } from '@/domain/modules/admin/suppliers/database'
import { SupplierResponse } from '@/domain/modules/admin/suppliers/dtos'
import { ICreateSupplierRepository } from '@/domain/modules/admin/suppliers/ports'
import { BadRequestError } from '@/domain/modules/core/errors'

import { PrismaClient } from '@prisma/client'

export class CreateSupplierPrismaRepository implements ICreateSupplierRepository {
  prisma: PrismaClient
  constructor () {
    this.prisma = new PrismaClient()
  }

  async create (payload: SupplierResponse): Promise<SupplierResponse> {
    try {
      const response = await this.prisma.supplier.create({
        data: {
          id: payload.id,
          name: payload.name,
          CNPJ: payload.CNPJ,
          email: payload.email,
          isActive: payload.isActive,
          isBlocked: payload.isBlocked,
          code: payload.code,
          isDeleted: payload.isDeleted,
          phone: payload.phone,
          address: {
            create: {
              id: Math.random().toString(),
              city: payload.address.city,
              neighborhood: payload.address.neighborhood,
              number: payload.address.number,
              state: payload.address.state,
              street: payload.address.street,
              zipCode: payload.address.zipCode,
              moreInfo: payload.address.moreInfo
            }
          }
        },
        include: {
          address: true
        }
      })
      return SupplierMapper.fromPrismaDataBaseToResponse(response)
    } catch (error: any) {
      if (error.code === 'P2002') {
        const field = String(error.meta.target[0])
        throw new BadRequestError(`${field} already exists`)
      }
      throw new Error('Internal Server Error')
    }
  }
}
