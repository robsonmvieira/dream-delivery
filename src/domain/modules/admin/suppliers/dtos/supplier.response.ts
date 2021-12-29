export class SupplierResponse {
  id: string
  CNPJ: string
  address: {
    street: string
    number: string
    ZipCode: string
    city: string
    neighborhood: string
    state: string
    moreInfo?: string
  }

  email: string
  code: string
  phone: string
  isActive: boolean
  isBlocked: boolean
  isDeleted: boolean
}
