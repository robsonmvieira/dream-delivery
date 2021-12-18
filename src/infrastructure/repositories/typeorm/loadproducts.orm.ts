import { IListAllProductRepository } from '@/domain/modules/products/ports'

export class ListAllProductRepository implements IListAllProductRepository {
  // constructor () {}
  list: () => Promise<any[]>
}
