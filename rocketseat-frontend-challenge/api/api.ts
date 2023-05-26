import axios from 'axios'
import IApiResponse from '../interfaces/IApiResponse'

export const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export const apiRequest = async (): Promise<IApiResponse> =>
  await api.post('http://localhost:3333/', {
    query: `
    query {
      allProducts {
        id
        name
        description
        image_url
        category
        price_in_cents
        sales
        created_at
      }
    }
  `,
  })
