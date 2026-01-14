import { ProductDto } from '@workspace/types'

export const splitProductsByCategories = (products: ProductDto[]) => {
  const categories: string[] = products.map((product) => product.categoryName.toString())
  const uniqueCategories = Array.from(new Set(categories))
  const productsByCategories: { categoryId: number; category: string; products: ProductDto[] }[] =
    uniqueCategories.reduce(
      (acc, category) => {
        acc.push({
          categoryId: products.find((product) => product.categoryName.toString() === category)!
            .categoryId,
          category,
          products: products.filter((product) => product.categoryName.toString() === category)
        })
        return acc
      },
      [] as { categoryId: number; category: string; products: ProductDto[] }[]
    )
  return productsByCategories
}
