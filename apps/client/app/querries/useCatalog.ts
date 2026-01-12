import { useQuery } from '@tanstack/react-query'
import { Locale } from '@workspace/types'

import { Catalog } from '../api'

const { getCatalogData } = Catalog

export const useCatalog = (locale: Locale) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['catalog', locale],
    queryFn: () => getCatalogData(locale),
    select: (res) => res.data,
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: true
  })
  console.log('useCatalog data', data)
  console.log('API URL', process.env.NEXT_PUBLIC_API_URL)
  console.log('error', error)
  const categories = data?.categories || []
  const products = data?.products || []
  const ingredients = data?.ingredients || []
  return { categories, products, ingredients, isLoading, error }
}
