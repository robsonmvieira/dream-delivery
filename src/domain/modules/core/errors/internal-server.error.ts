import { ErrorBase, ErrorCodes } from '@/domain/modules/core/errors'

export class InternalServerError extends ErrorBase {
  readonly code = ErrorCodes.internalErrorServerError
}
