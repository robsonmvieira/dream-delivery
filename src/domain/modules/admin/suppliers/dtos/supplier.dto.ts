export type SupplierDTO = {
  name: string
  CNPJ: string
  address: {
    street: string
    number: string
    zipCode: string
    city: string
    neighborhood: string
    state: string
    moreInfo?: string
  }

  email: string
  code: string
  phone: string
}
