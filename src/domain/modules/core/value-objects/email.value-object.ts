import { BadRequestError } from '@/domain/modules/core/errors'
import { Guard } from '@/domain/modules/core/utils'
export class Email {
  private readonly _value: string

  constructor (email: string) {
    const result = this.isValidEmail(email)

    if (result === true) {
      this._value = email
    }
  }

  private isValidEmail (email: string): boolean | BadRequestError {
    if (Guard.isEmpty(email)) {
      return new BadRequestError('Invalid Value')
    }
    const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i
    return emailRegex.test(email)
  }

  getValue (): string {
    return this._value
  }
}
