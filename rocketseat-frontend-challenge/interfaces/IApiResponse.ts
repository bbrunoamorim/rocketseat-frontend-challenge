import IProduct from './IProduct'

export default interface IApiResponse {
  data: {
    data: {
      allProducts: IProduct[]
    }
  }
}
