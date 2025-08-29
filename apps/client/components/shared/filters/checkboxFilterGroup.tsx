'use client'
import React, { ChangeEvent, FC, useEffect, useState } from 'react'
import { useSet } from 'react-use'

import { Input } from '~/components/ui'
import { cn } from '~/lib/utils'

import { FilterCheckbox } from './filterCheckbox'
import { IFilterCheckbox } from './types'

interface ICheckboxFilterGroup {
  className?: string
  title: string
  items: IFilterCheckbox[]
  defaultItems?: IFilterCheckbox[]
  limit?: number
  searchInputPlaceholder?: string
  onChange?: (values: string[]) => void
  defaultValues?: string[]
}

export const CheckboxFilterGroup: FC<ICheckboxFilterGroup> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = 'Поиск...',
  className,
  onChange,
  defaultValues
}) => {
  const [showAll, setShowAll] = useState<boolean>(false)
  const [selected, { add, toggle }] = useSet<string>(new Set([]))
  const [searchValue, setSearchValue] = useState<string>('')

  const onCheckedChange = (value: string) => {
    toggle(value)
  }

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value.trim())
  }

  const filteredItems = showAll
    ? items.filter((item) => item.label.toLowerCase().includes(searchValue.toLowerCase()))
    : (defaultItems || items).slice(0, limit)

  useEffect(() => {
    if (defaultValues) {
      defaultValues.forEach(add)
    }
  }, [defaultValues?.length])
  useEffect(() => {
    onChange?.(Array.from(selected))
  }, [selected])

  return (
    <div className={cn('', className)}>
      <p className="mb-3 font-bold">{title}</p>
      {showAll && (
        <div className="mb-5">
          <Input
            onChange={onSearchChange}
            placeholder={searchInputPlaceholder}
            className="border-none bg-gray-50"
          />
        </div>
      )}
      <div className="scrollbar flex max-h-96 flex-col gap-4 overflow-auto pr-2">
        {filteredItems.map((item) => (
          <FilterCheckbox
            onCheckedChange={() => onCheckedChange(item.value)}
            checked={selected.has(item.value)}
            key={String(item.value)}
            value={item.value}
            label={item.label}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>
      {items.length > limit && (
        <div className={showAll ? 'mt-4 border-t border-t-neutral-100' : ''}>
          <button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  )
}
