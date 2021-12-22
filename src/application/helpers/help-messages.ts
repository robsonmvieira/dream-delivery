import { InternalServerError } from '@/domain/modules/core/errors'
import { HttpResponse } from '@/application/helpers'

export const internalServerError = (): HttpResponse => ({
  statusCode: 500,
  data: new InternalServerError('Something went wrong. Try again later')
})

export const ok = <T = any> (data: T): HttpResponse => ({
  statusCode: 200,
  data
})

export const created = <T = any> (data: T): HttpResponse => ({
  statusCode: 201,
  data
})
