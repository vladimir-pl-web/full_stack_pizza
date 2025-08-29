import React, { FC } from 'react'

import { Input, RangeSlider } from '~/components/ui'
import { cn } from '~/lib/utils'

import { Title } from '../title'
import { CheckboxFilterGroup } from './checkboxFilterGroup'
import { defaultItems, items } from './dummy'
import { FilterCheckbox } from './filterCheckbox'

interface IFilters {
  className?: string
}

export const Filters: FC<IFilters> = ({ className }) => {
  return (
    <div className={cn('w-60', className)}>
      <Title text="Filters" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox label="Can pick" value="1" />
        <FilterCheckbox label="New" value="2" />
      </div>
      <div className="mt-5 border-t border-t-neutral-100 py-6 pb-7 dark:border-t-neutral-800">
        <p className="mb-3 font-bold">Price from to</p>
        <div className="mb-5 flex gap-3">
          <Input type="number" placeholder="5" min={5} max={30} defaultValue={5} />
          <Input type="number" min={5} max={30} placeholder="30" />
        </div>
        <RangeSlider min={5} max={30} step={1} value={[0, 30]} />
      </div>
      <CheckboxFilterGroup
        defaultItems={defaultItems}
        title="Ingredients"
        limit={5}
        items={items}
      />
    </div>
  )
}
