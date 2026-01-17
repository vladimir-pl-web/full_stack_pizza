import { ProductDto } from '@workspace/types'

export const splitProductsByCategories = (products: ProductDto[]) => {
  const map = new Map<number, { categoryId: number; category: string; products: ProductDto[] }>()

  for (const product of products) {
    if (!map.has(product.categoryId)) {
      map.set(product.categoryId, {
        categoryId: product.categoryId,
        category: product.categoryName.toString(),
        products: []
      })
    }
    map.get(product.categoryId)!.products.push(product)
  }
  return Array.from(map.values())
}
