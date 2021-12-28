import { Entity } from '@/domain/modules/core/base-classes'
import { ID, Address, Email } from '@/domain/modules/core/value-objects'

export class Supplier extends Entity {
  private CNPJ: string
  private readonly address: Address
  private email: Email
  private readonly code: string
  private readonly phone: string
  private isActive: boolean = false
  private isBlocked: boolean = true
  isDeleted: boolean = false

  constructor (data: any) {
    super()

    const id = ID.generate()

    if (this.isValidateId(id)) {
      this.id = id
      Object.assign(this, data)
      this.email = new Email(data.email)
      this.address = new Address(data.address)
    }
  }

  getCNPJ (): string { return this.CNPJ }

  setCNPJ (value: string): void { this.CNPJ = value }

  setIsBlocked (isBlocked: boolean): void {
    this.isBlocked = isBlocked
  }

  getIsBlocked (): boolean {
    return this.isBlocked
  }

  setIsActive (isActive: boolean): void {
    this.isActive = isActive
  }

  getIsActive (): boolean {
    return this.isActive
  }

  getEmail (): string { return this.email.getValue() }

  setEmail (value: string): void {
    this.email = new Email(value)
  }

  setDeleted (value: boolean): void {
    this.isDeleted = value
  }

  getIsDeleted (): boolean { return this.isDeleted }
}
