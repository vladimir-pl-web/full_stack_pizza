import { useInfiniteQuery } from '@tanstack/react-query'
import { CatalogPageDto, CatalogUIData, Locale } from '@workspace/types'

import { Catalog, Products } from '../api'
import { mapBaseToPage } from '../utils'
import { splitProductsByCategories } from '../utils/splitProductsByCategories'

const { fetchNewProducts } = Products
const { getCatalogData } = Catalog

export const useCatalogInfinite = (locale: Locale) => {
  return useInfiniteQuery<
    CatalogPageDto,
    Error,
    CatalogUIData,
    [string, Locale],
    number | undefined
  >({
    queryKey: ['catalog', locale],
    queryFn: async ({ pageParam }) => {
      if (!pageParam) {
        const base = await getCatalogData(locale)
        return mapBaseToPage(base)
      }
      return fetchNewProducts(locale, pageParam)
    },
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    select: (data) => {
      const products = data.pages.flatMap((page) => page.products)

      return {
        categories: data.pages[0].categories ?? [],
        ingredients: data.pages[0].ingredients ?? [],
        productsByCategories: splitProductsByCategories(products)
      }
    },
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: true
  })
}
