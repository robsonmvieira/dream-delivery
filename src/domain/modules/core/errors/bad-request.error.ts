import { ErrorBase, ErrorCodes } from '@/domain/modules/core/errors'

export class BadRequestError extends ErrorBase {
  readonly code = ErrorCodes.badRequest
}
