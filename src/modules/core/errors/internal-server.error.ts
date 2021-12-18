import { ErrorBase, ErrorCodes } from '@/modules/core/errors'

export class InternalServerError extends ErrorBase {
  readonly code = ErrorCodes.internalErrorServerError
}
