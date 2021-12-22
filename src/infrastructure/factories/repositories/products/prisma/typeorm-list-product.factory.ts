// export class ListAllTypeormProductRepository implements IListAllTypeormProductRepository {

import { ListAllProductPrismaRepository } from '@/infrastructure/repositories/prisma'

// }
export const listProductRepositoryFactory = (): ListAllProductPrismaRepository => {
  return new ListAllProductPrismaRepository()
}
