'use client'
import React, { FC, RefObject, useEffect, useRef } from 'react'
import { useIntersection } from 'react-use'

import { useCategoryStore } from '~/store'

import { ProductCard, Title } from '..'

interface IProductGroupList {
  className?: string
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[]
  categoryId: string
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
      setActiveCategory(categoryId)
    }
  }, [intersection, categoryId])

  return (
    <>
      <div className="h-0" id={categoryId}></div>
      <div className={className} ref={categoryRef}>
        <Title text={title} size="lg" className="mb-5 font-extrabold" />
        <div className="grid grid-cols-3 gap-[50px]">
          {items.map((item, i) => (
            <ProductCard
              key={item.id}
              name="Маргарита"
              imageUrl="https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp"
              price={390}
              count={i % 2}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}
