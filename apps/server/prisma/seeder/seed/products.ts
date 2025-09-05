import { Language, PrismaClient, TranslationType } from '@prisma/client'

import { COCKTAILS, COFFEE, COMBO, DESSERTS, PIZZAS, SNACKS } from './items/index.ts'

interface SeedProduct {
  translations: {
    name: Record<Language, string>
    description: Record<Language, string>
  }
  imageUrl: string
  sizes?: number[]
  pizzaType?: number
  ingredients?: string[]
}

export async function seedProducts(prisma: PrismaClient) {
  const categories = await prisma.category.findMany({
    include: { translations: true }
  })

  // заранее загружаем все ингредиенты для быстрого поиска
  const allIngredients = await prisma.ingredient.findMany({
    include: { translations: true }
  })

  const findIngredientId = (nameEn: string): number | undefined => {
    const ing = allIngredients.find((i) =>
      i.translations.some((t) => t.language === 'en' && t.value === nameEn)
    )
    return ing?.id
  }

  const allProducts: { categoryEn: string; items: SeedProduct[] }[] = [
    { categoryEn: 'Pizzas', items: PIZZAS },
    { categoryEn: 'Combo', items: COMBO },
    { categoryEn: 'Snacks', items: SNACKS },
    { categoryEn: 'Cocktails', items: COCKTAILS },
    { categoryEn: 'Coffee', items: COFFEE },
    { categoryEn: 'Desserts', items: DESSERTS }
  ]

  for (const group of allProducts) {
    const category = categories.find((c) =>
      c.translations.some((t) => t.language === 'en' && t.value === group.categoryEn)
    )
    if (!category) continue

    for (const item of group.items) {
      // создаём продукт
      const product = await prisma.product.create({
        data: {
          categoryId: category.id,
          imageUrl: item.imageUrl,
          ingredients: {
            connect:
              item.ingredients
                ?.map(findIngredientId)
                .filter(Boolean)
                .map((id) => ({ id })) ?? []
          }
        }
      })

      // переводы
      for (const lang of ['en', 'ru', 'lv', 'nl'] as Language[]) {
        await prisma.translatedText.create({
          data: {
            language: lang,
            type: TranslationType.name,
            value: item.translations.name[lang],
            productId: product.id
          }
        })
        await prisma.translatedText.create({
          data: {
            language: lang,
            type: TranslationType.description,
            value: item.translations.description[lang],
            productId: product.id
          }
        })
      }

      // варианты (ProductItem)
      if (item.sizes?.length) {
        for (const size of item.sizes) {
          await prisma.productItem.create({
            data: {
              price: 500, // можно задать динамику, если хочешь
              size,
              pizzaType: item.pizzaType,
              productId: product.id
            }
          })
        }
      } else {
        // если размеров нет → создаём один вариант
        await prisma.productItem.create({
          data: {
            price: 500,
            productId: product.id
          }
        })
      }
    }
  }

  console.log('✅ Products + items + ingredients seeded.')
}
