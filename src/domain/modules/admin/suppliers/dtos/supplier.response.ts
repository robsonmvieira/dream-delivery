export class SupplierResponse {
  id: string
  CNPJ: string
  name: string
  email: string
  code: string
  phone: string
  isActive: boolean
  isBlocked: boolean
  isDeleted: boolean
  address: {
    street: string
    number: string
    zipCode: string
    city: string
    neighborhood: string
    state: string
    moreInfo?: string
  }
}
