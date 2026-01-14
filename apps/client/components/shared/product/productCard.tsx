import { IngredientDto } from '@workspace/types'
import { Plus } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { Button, CountButton } from '~/components/ui'

import { Title } from '../title'

interface IProductCard {
  className?: string
  id: number
  name: string
  price: number
  count?: number
  imageUrl: string
  ingredients: IngredientDto[]
}

export const ProductCard: FC<IProductCard> = ({
  className,
  id,
  ingredients,
  imageUrl,
  name,
  price,
  count
}) => {
  const ingredientsString = ingredients.map((ingredient) => ingredient.name).join(', ')
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="bg-secondary flex h-[260px] justify-center rounded-lg p-6">
          <Image height={215} width={215} src={imageUrl} alt={name} />
        </div>
        <Title text={name} size="sm" className="mt-3 mb-1 font-bold" />
        <p className="text-sm text-gray-400">{ingredientsString}</p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[20px]">
            от <b>{price} ₽</b>
          </span>

          {count ? (
            <CountButton value={count} size="lg" />
          ) : (
            <Button variant="secondary">
              <Plus className="mr-1 h-4 w-4" />
              Добавить
            </Button>
          )}
        </div>
      </Link>
    </div>
  )
}
