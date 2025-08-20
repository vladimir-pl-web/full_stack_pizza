'use client'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

import { cn } from '~/lib/utils'

interface ICategories {
  className?: string
}

export const Categories: React.FC<ICategories> = ({ className }) => {
  const categories: { label: string }[] = [
    { label: 'cats.pizzas' },
    { label: 'cats.combo' },
    { label: 'cats.snacks' },
    { label: 'cats.cocktails' },
    { label: 'cats.coffee' },
    { label: 'cats.drinks' },
    { label: 'cats.desserts' }
  ]
  const activeIndex = 0
  const { t } = useTranslation('common')
  return (
    <div className={cn('inline-flex gap-1 rounded-2xl bg-gray-50 p-1', className)}>
      {categories.map(({ label }, i) => (
        <Link
          key={label}
          className={cn(
            'flex h-11 items-center rounded-2xl px-5 font-bold',
            activeIndex === i && 'text-primary bg-white shadow-md shadow-gray-200'
          )}
          href={`/#${label}`}
        >
          {t(`${label}`)}
        </Link>
      ))}
    </div>
  )
}
