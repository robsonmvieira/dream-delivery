export interface SerializedException {
  message: string
  code: string
  stack?: string
  metadata?: unknown
}

export abstract class ErrorBase extends Error {
  abstract code: string
  constructor (
    override readonly message: string,
    private readonly metadata?: unknown) {
    super(message)
    Error.captureStackTrace(this, this.constructor)
  }

  toJSON (): SerializedException {
    return {
      message: this.message,
      code: this.code,
      stack: this.stack,
      metadata: this.metadata
    }
  }
}
