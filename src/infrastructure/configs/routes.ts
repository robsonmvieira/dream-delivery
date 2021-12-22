
import { Express } from 'express'
// import { readdirSync } from 'fs'
// import { join } from 'path'
// import { listProductControllerFactory } from '../factories/controllers'
import productRoutes from '@/infrastructure/configs/routes/product.routes'
export const routesRoot = (app: Express): void => {
  app.use('/api/products', productRoutes)
}
