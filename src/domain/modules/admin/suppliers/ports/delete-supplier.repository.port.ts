export interface IDeleteSupplierRepository {
  deleteSupplier: (id: string) => Promise<void>
}
