import { CategoryDto, IngredientDto, ProductDto } from '@workspace/types'

export interface CatalogPageDto {
  products: ProductDto[]
  nextCursor?: number

  categories?: CategoryDto[]
  ingredients?: IngredientDto[]
}

export interface CatalogUIData {
  categories: CategoryDto[]
  ingredients: IngredientDto[]
  productsByCategories: {
    categoryId: number
    category: string
    products: ProductDto[]
  }[]
}
