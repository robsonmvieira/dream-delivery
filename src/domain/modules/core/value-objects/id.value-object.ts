import { v4 as uuidV4, validate as uuidValidate } from 'uuid'

export class ID {
  protected value: string

  static generate (): string {
    return uuidV4()
  }

  static validate (uuid: string): boolean {
    return uuidValidate(uuid)
  }
}
