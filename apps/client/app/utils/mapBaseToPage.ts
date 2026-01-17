import { CatalogBaseResponse, CatalogPageDto } from '@workspace/types'

export const mapBaseToPage = (res: CatalogBaseResponse): CatalogPageDto => {
  return {
    products: res.data.products,
    categories: res.data.categories,
    ingredients: res.data.ingredients,
    nextCursor: res.nextCursor
  }
}
