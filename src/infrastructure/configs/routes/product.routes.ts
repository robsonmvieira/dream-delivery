import { Router } from 'express'
import { listProductControllerFactory } from '@/infrastructure/factories/controllers'

const routes = Router()

routes.get('/', async (req, res) => listProductControllerFactory().handler(req, res))
routes.post('/', listProductControllerFactory().handler)

export default routes
