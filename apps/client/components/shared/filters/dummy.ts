import { IFilterCheckbox } from './types'

export const defaultItems: IFilterCheckbox[] = [
  {
    label: 'Сырный соус',
    value: '1'
  },
  {
    label: 'Моццарелла',
    value: '2'
  },
  {
    label: 'Чеснок',
    value: '3'
  },
  {
    label: 'Солённые огурчики',
    value: '4'
  },
  {
    label: 'Красный лук',
    value: '5'
  },
  {
    label: 'Томаты',
    value: '6'
  }
]

export const items: IFilterCheckbox[] = [
  ...defaultItems,
  {
    label: 'Базилик',
    value: '7'
  },
  {
    label: 'Пепперони',
    value: '8'
  },
  {
    label: 'Грибы',
    value: '9'
  },
  {
    label: 'Курица',
    value: '10'
  },
  {
    label: 'Бекон',
    value: '11'
  },
  {
    label: 'Острый перец',
    value: '12'
  },
  {
    label: 'Кукуруза',
    value: '13'
  },
  {
    label: 'Ананасы',
    value: '14'
  },
  {
    label: 'Крабовые палочки',
    value: '15'
  },
  {
    label: 'Оливки',
    value: '16'
  },
  {
    label: 'Кальмары',
    value: '17'
  },
  {
    label: 'Тунец',
    value: '18'
  }
]

export const pizzaItems = [
  { id: 1, name: 'Маргарита' },
  { id: 2, name: 'Пепперони' },
  { id: 3, name: 'Четыре сезона' },
  { id: 4, name: 'Четыре сыра' },
  { id: 5, name: 'Гавайская' },
  { id: 6, name: 'Мясная' },
  { id: 7, name: 'Вегетарианская' },
  { id: 8, name: 'Барбекю' },
  { id: 9, name: 'Охотничья' },
  { id: 10, name: 'Сырная' }
]
