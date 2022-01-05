import { listSupplierControllerFactory, createSupplierControllerFactory } from '@/infrastructure/factories/controllers/supplier'
import { Router } from 'express'

const routes = Router()

routes.get('/', async (req, res) => listSupplierControllerFactory().handler(req, res))
routes.post('/', async (req, res) => createSupplierControllerFactory().handler(req, res))

export default routes
