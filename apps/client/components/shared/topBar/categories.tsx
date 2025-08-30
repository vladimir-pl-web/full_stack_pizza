'use client'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from '~/lib/utils'
import { useCategoryStore } from '~/store'

interface ICategories {
  className?: string
}

export const Categories: React.FC<ICategories> = ({ className }) => {
  const categories: { label: string; categoryId: string }[] = [
    { label: 'cats.pizzas', categoryId: '1' },
    { label: 'cats.combo', categoryId: '2' },
    { label: 'cats.snacks', categoryId: '3' },
    { label: 'cats.cocktails', categoryId: '4' },
    { label: 'cats.coffee', categoryId: '5' },
    { label: 'cats.drinks', categoryId: '6' },
    { label: 'cats.desserts', categoryId: '7' }
  ]
  const activeIndex = useCategoryStore((state) => state.activeCategory)

  const { t } = useTranslation('common')
  return (
    <div
      className={cn('inline-flex gap-1 rounded-2xl bg-gray-50 p-1 dark:bg-neutral-200', className)}
    >
      {categories.map(({ label, categoryId }) => (
        <Link
          key={label}
          className={cn(
            'hover:text-primary flex h-11 items-center rounded-2xl px-5 text-sm font-bold text-gray-600 hover:bg-white dark:text-neutral-400',
            activeIndex === categoryId &&
              'text-primary dark:text-primary bg-white shadow-md shadow-gray-200 dark:bg-neutral-900'
          )}
          href={`/#${categoryId}`}
          scroll={true}
        >
          {t(`${label}`)}
        </Link>
      ))}
    </div>
  )
}
