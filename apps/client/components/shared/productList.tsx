'use client'

import { Locale } from '@workspace/types'
import React, { FC, useMemo } from 'react'

import { useCatalog } from '~/app/querries/useCatalog'

import { ProductGroupList } from './product/productGroupList'

interface IProductList {
  locale: Locale
}
export const ProductList: FC<IProductList> = ({ locale }) => {
  const { productsByCategories, isLoading } = useCatalog(locale)

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
      <div className="flex flex-col gap-16">{productsContent}</div>
    </div>
  )
}
