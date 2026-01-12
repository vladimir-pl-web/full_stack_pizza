import { create } from 'zustand'

interface State {
  activeCategory: number
  setActiveCategory: (id: number) => void
}
export const useCategoryStore = create<State>((set) => ({
  activeCategory: 2,
  setActiveCategory: (id: number) => set({ activeCategory: id })
}))
