import React, { FC } from 'react'

import { Checkbox } from '~/components/ui'

import { IFilterCheckbox } from './types'

export const FilterCheckbox: FC<IFilterCheckbox> = ({
  label,
  value,
  endAdornment,
  checked,
  onCheckedChange
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        className="h-6 w-6 rounded-[8px]"
        id={`checkbox-${String(value)}`}
      />
      <label htmlFor={`checkbox-${String(value)}`} className="flex-1 cursor-pointer leading-none">
        {label}
      </label>
      {endAdornment}
    </div>
  )
}
