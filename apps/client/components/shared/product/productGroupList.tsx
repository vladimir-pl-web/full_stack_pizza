'use client'
import { ProductDto } from '@workspace/types'
import React, { FC, RefObject, useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

import { useCategoryStore } from '~/app/stores'

import { ProductCard, Title } from '..'

interface IProductGroupList {
  className?: string
  title: string
  items: ProductDto[]
  categoryId: number
}

export const ProductGroupList: FC<IProductGroupList> = ({
  className,
  title,
  items,
  categoryId
}) => {
  const setActiveCategory = useCategoryStore((state) => state.setActiveCategory)
  const categoryRef = useRef<HTMLDivElement>(null)
  const intersection = useIntersection(categoryRef as RefObject<HTMLElement>, {
    threshold: 0.4
  })

  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategory(+categoryId)
    }
  }, [intersection, categoryId])

  return (
    <>
      <div className="h-0" id={categoryId.toString()}></div>
      <div className={className} ref={categoryRef}>
        <Title text={title} size="lg" className="mb-5 font-extrabold" />
        <div className="grid grid-cols-3 gap-[50px]">
          {items.map((item, i) => (
            <ProductCard
              key={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              price={item.price}
              ingredients={item.ingredients}
              count={i % 2}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}
