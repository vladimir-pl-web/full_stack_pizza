import { Language, PrismaClient, TranslationType } from '@prisma/client'

export async function seedCategories(prisma: PrismaClient) {
  const categories = [
    { translations: { en: 'Pizzas', ru: 'Пиццы', lv: 'Picas', nl: "Pizza's" } },
    { translations: { en: 'Combo', ru: 'Комбо', lv: 'Kombinācijas', nl: 'Combi' } },
    { translations: { en: 'Snacks', ru: 'Закуски', lv: 'Uzkodas', nl: 'Snacks' } },
    { translations: { en: 'Cocktails', ru: 'Коктейли', lv: 'Kokteiļi', nl: 'Cocktails' } },
    { translations: { en: 'Coffee', ru: 'Кофе', lv: 'Kafija', nl: 'Koffie' } },
    { translations: { en: 'Drinks', ru: 'Напитки', lv: 'Dzērieni', nl: 'Dranken' } },
    { translations: { en: 'Desserts', ru: 'Десерты', lv: 'Deserti', nl: 'Desserts' } }
  ]

  for (const cat of categories) {
    const category = await prisma.category.create({ data: {} })
    for (const [lang, value] of Object.entries(cat.translations)) {
      await prisma.translatedText.create({
        data: {
          language: lang as Language,
          type: TranslationType.name,
          value,
          categoryId: category.id
        }
      })
    }
  }
}
