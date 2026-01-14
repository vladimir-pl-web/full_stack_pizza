import { Locale } from '../lang-types'
export interface IngredientDto {
  id: number
  name: string
  price: number
  imageUrl: string
}
export interface CategoryDto {
  id: number
  name: string
}
export interface ProductDto {
  id: number
  name: string
  description: string
  imageUrl: string
  price: number
  categoryId: number
  categoryName: string
  ingredients: IngredientDto[]
}
export interface CatalogBaseResponse {
  locale: Locale
  data: {
    categories: CategoryDto[]
    ingredients: IngredientDto[]
    products: ProductDto[]
  }
}
