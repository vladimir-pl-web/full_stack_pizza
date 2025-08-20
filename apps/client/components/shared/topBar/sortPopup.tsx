'use client'
import { ArrowUpDown } from 'lucide-react'
import React, { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Popover, PopoverContent, PopoverTrigger } from '~/components/ui/popover'
import { cn } from '~/lib/utils'

interface ISortPopup {
  className?: string
}

export const SortPopup: FC<ISortPopup> = ({ className }) => {
  const { t } = useTranslation('common')
  const [sort, setSort] = useState<string>(t('sort.popular'))

  const sortOptions: { name: string; value: string }[] = [
    { name: 'sort.popular', value: 'sort.popular.first' },
    { name: 'sort.cheap', value: 'sort.cheap.first' },
    { name: 'sort.expensive', value: 'sort.expensive.first' },
    { name: 'sort.rating', value: 'sort.rating.first' }
  ]

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            'inline-flex h-[52px] w-[265px] cursor-pointer items-center gap-1 rounded-2xl bg-gray-50 px-5',
            className
          )}
        >
          <ArrowUpDown className="h-4 w-4" />
          <b>{t('sort')}:</b>

          <b className="text-primary">{sort}</b>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[240px]">
        <ul>
          {sortOptions.map(({ name, value }) => (
            <li
              key={value}
              className="hover:bg-secondary hover:text-primary cursor-pointer rounded-md p-2 px-4"
              onClick={() => {
                setSort(t(name))
              }}
            >
              {t(value)}
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  )
}
