import { Router } from 'express'
import { createProductControllerFactory, listProductControllerFactory } from '@/infrastructure/factories/controllers'

const routes = Router()

routes.get('/', async (req, res) => listProductControllerFactory().handler(req, res))
routes.post('/', async (req, res) => createProductControllerFactory().handler(req, res))

export default routes
