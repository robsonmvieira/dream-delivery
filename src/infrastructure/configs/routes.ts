
import { Express } from 'express'
import productRoutes from '@/infrastructure/configs/routes/product.routes'
import supplierRoutes from '@/infrastructure/configs/routes/suppliers.routes'

export const routesRoot = (app: Express): void => {
  app.use('/api/products', productRoutes)
  app.use('/api/suppliers', supplierRoutes)
}
