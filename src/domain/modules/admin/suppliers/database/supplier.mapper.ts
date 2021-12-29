import { SupplierResponse } from '@/domain/modules/admin/suppliers/dtos'

export class SupplierMapper {
  static fromPrismaDataBaseToResponse (entity: any): SupplierResponse {
    return {
      id: entity.id,
      CNPJ: entity.CNPJ,
      address: {
        street: entity.address.street,
        number: entity.address.number,
        ZipCode: entity.address.zipCode,
        city: entity.address.city,
        neighborhood: entity.address.neighborhood,
        state: entity.address.state,
        moreInfo: entity.address.moreInfo ?? ''
      },
      email: entity.email,
      code: entity.code,
      phone: entity.phone,
      isActive: entity.isActive,
      isBlocked: entity.isBlocked,
      isDeleted: entity.isDeleted
    }
  }
}
