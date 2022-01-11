import { ErrorBase, ErrorCodes } from '@/domain/modules/core/errors'
export class NotFoundException extends ErrorBase {
  readonly code = ErrorCodes.notFound
}
