import { ID } from '@/domain/modules/core/value-objects'

export abstract class Entity {
  protected id: string

  public getid (): string {
    return this.id
  }

  protected isValidateId (newId: string): boolean {
    return ID.validate(newId)
  }
}
