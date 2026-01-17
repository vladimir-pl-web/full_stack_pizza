'use client'

import { Locale } from '@workspace/types'
import React, { FC, RefObject, useEffect, useMemo, useRef } from 'react'
import { useIntersection } from 'react-use'

import { useCatalogInfinite } from '~/app/queries'

import { ProductGroupList } from './productGroupList'

interface IProductList {
  locale: Locale
}
export const ProductList: FC<IProductList> = ({ locale }) => {
  const loadMoreRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>
  const intersection = useIntersection(loadMoreRef, {
    rootMargin: '200px',
    threshold: 0
  })
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useCatalogInfinite(locale)
  const productsByCategories = data?.productsByCategories ?? []

  useEffect(() => {
    if (intersection?.isIntersecting && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
      console.log('ProductList render', hasNextPage, intersection?.isIntersecting)
    }
  }, [intersection?.isIntersecting, hasNextPage, isFetchingNextPage, fetchNextPage])

  const productsContent = useMemo(() => {
    if (isLoading) {
      return <div>Loading...</div>
    }
    return productsByCategories.map(({ categoryId, category, products }) => {
      return (
        <ProductGroupList
          key={category}
          categoryId={categoryId}
          title={category}
          items={products}
        />
      )
    })
  }, [isLoading, productsByCategories])

  return (
    <div className="flex-1">
      <div className="flex flex-col gap-16">
        {productsContent}
        <div ref={loadMoreRef} className="h-1" />

        {isFetchingNextPage && <div>Loading more...</div>}
      </div>
    </div>
  )
}
