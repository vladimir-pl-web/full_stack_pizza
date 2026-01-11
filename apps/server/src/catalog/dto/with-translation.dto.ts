import { Category, Ingredient, Product, TranslatedText } from '@prisma/client'

// DTO для возврата с фронта
export type TranslatedField = {
  type: 'name' | 'description'
  value: string
}

export type CategoryWithTranslations = Category & {
  translations: TranslatedText[]
}

export type IngredientWithTranslations = Ingredient & {
  translations: TranslatedText[]
}

export type ProductWithTranslations = Product & {
  translations: TranslatedText[]
}

export type CatalogDto = {
  categories: CategoryWithTranslations[]
  ingredients: IngredientWithTranslations[]
  products: ProductWithTranslations[]
}
