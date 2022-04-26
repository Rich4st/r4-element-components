export interface CityType {
  id: number,
  spell: string,
  name: string
}
// 省份
export interface ProvinceType {
  name: string,
  id?: string,
  data: string[]
}
