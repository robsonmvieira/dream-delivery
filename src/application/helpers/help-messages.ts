import { InternalServerError } from '@/domain/modules/core/errors'
import { HttpResponse } from '@/application/helpers'

export const internalServerError = (): HttpResponse => ({
  statusCode: 500,
  data: new InternalServerError('Something went wrong. Try again later')
})

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  data
})
