import React from 'react'

import { Container } from '../container'
import { Categories } from './categories'
import { SortPopup } from './sortPopup'

export const TopBar = () => {
  return (
    <Container className="sticky top-0 z-10 my-5 flex w-full items-center justify-between gap-4 shadow-lg shadow-black/5">
      <Categories />
      <SortPopup />
    </Container>
  )
}
