import { listSupplierControllerFactory } from '@/infrastructure/factories/controllers/supplier'
import { Router } from 'express'

const routes = Router()

routes.get('/', async (req, res) => listSupplierControllerFactory().handler(req, res))
// routes.post('/', async (req, res) => createProductControllerFactory().handler(req, res))

export default routes
