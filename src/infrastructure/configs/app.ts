import { basicMiddleware } from '@/infrastructure/middlewares/basic-middleware'
import { routesRoot } from '@/infrastructure/configs/routes'
import express from 'express'

const app = express()
basicMiddleware(app)
routesRoot(app)

export { app }
