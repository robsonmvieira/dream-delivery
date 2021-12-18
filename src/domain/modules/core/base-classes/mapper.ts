
export interface IMapper<Entity> {
  map: (data: any) => Entity
  unMap: (data: Entity) => object
}
