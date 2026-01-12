'use client'
import { Locale } from '@workspace/types'
import Link from 'next/link'
import React, { useMemo } from 'react'

import { useCatalog } from '~/app/querries/useCatalog'
import { useCategoryStore } from '~/app/stores'
import { CategoriesSkeleton } from '~/components/ui/skeletons/categoriesSceleton'
import { cn } from '~/lib/utils'

interface ICategories {
  className?: string
  locale: Locale
}

export const Categories: React.FC<ICategories> = ({ className, locale }) => {
  const { categories, isLoading } = useCatalog(locale)

  const activeIndex = useCategoryStore((state) => state.activeCategory)
  const setActiveCategory = useCategoryStore((state) => state.setActiveCategory)
  const onActiveCategorySet = (id: number) => {
    setActiveCategory(id)
  }

  const categoriesContent = useMemo(() => {
    if (isLoading) {
      return <CategoriesSkeleton />
    }
    return (
      <div
        className={cn(
          'inline-flex gap-1 rounded-2xl bg-gray-50 p-1 dark:bg-neutral-200',
          className
        )}
      >
        {categories.map(({ id, name }) => (
          <Link
            key={id}
            onClick={() => onActiveCategorySet(id)}
            className={cn(
              'hover:text-primary flex h-11 items-center rounded-2xl px-5 text-sm font-bold text-gray-600 hover:bg-white dark:text-neutral-400',
              activeIndex === id &&
                'text-primary dark:text-primary bg-white shadow-md shadow-gray-200 dark:bg-neutral-900'
            )}
            href={`/#${id}`}
            scroll={true}
          >
            {name}
          </Link>
        ))}
      </div>
    )
  }, [isLoading, activeIndex, categories, className])
  return <>{categoriesContent}</>
}
