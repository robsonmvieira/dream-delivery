import { SupplierResponse } from '@/domain/modules/admin/suppliers/dtos'

export class SupplierMapper {
  static fromPrismaDataBaseToResponse (entity: any): SupplierResponse {
    return {
      id: entity.id,
      name: entity.name,
      CNPJ: entity.CNPJ,
      email: entity.email,
      code: entity.code,
      phone: entity.phone,
      isActive: entity.isActive,
      isBlocked: entity.isBlocked,
      isDeleted: entity.isDeleted,
      address: {
        street: entity.address.street,
        number: entity.address.number,
        zipCode: entity.address.zipCode,
        city: entity.address.city,
        neighborhood: entity.address.neighborhood,
        state: entity.address.state,
        moreInfo: entity.address.moreInfo ?? ''
      }
    }
  }

  static fromEntityDataBaseToResponse (entity: any): SupplierResponse {
    return {
      id: entity.id,
      name: entity.name,
      CNPJ: entity.CNPJ,
      email: entity.email,
      code: entity.code,
      phone: entity.phone,
      isActive: entity.isActive,
      isBlocked: entity.isBlocked,
      isDeleted: entity.isDeleted,
      address: {
        street: entity.address.street,
        number: entity.address.number,
        zipCode: entity.address.zipCode,
        city: entity.address.city,
        neighborhood: entity.address.neighborhood,
        state: entity.address.state,
        moreInfo: entity.address.moreInfo
      }
    }
  }
}
