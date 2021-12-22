import { Router } from 'express'
// import { listProductControllerFactory } from '@/infrastructure/factories/controllers'
import { ListProductController } from '@/application/controllers'
import { ListAllProductPrismaRepository } from '@/infrastructure/repositories/prisma'
import { ListProductsUseCase } from '@/domain/modules/products/usecases'
const listAllProductPrismaRepository = new ListAllProductPrismaRepository()
const useCase = new ListProductsUseCase(listAllProductPrismaRepository)

const listProductController = new ListProductController(useCase)
// console.log(listProductController.handler())

const routes = Router()
// export default (router: Router): void => {
//   console.log('log acima')
//   router.get('/', (req, res) => {
//     console.log('loguei')
//     res.status(200).json({ data: 'Its ok!!' })
//   })
// }
routes.get('/', listProductController.handler)
export default routes
