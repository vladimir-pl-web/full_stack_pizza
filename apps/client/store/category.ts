import { create } from 'zustand'

interface State {
  activeCategory: string
  setActiveCategory: (id: string) => void
}
export const useCategoryStore = create<State>((set) => ({
  activeCategory: '1',
  setActiveCategory: (id: string) => set({ activeCategory: id })
}))
