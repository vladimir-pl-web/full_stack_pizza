import { Language, PrismaClient, TranslationType } from '@prisma/client'

interface SeedIngredient {
  translations: Record<Language, string>
  price: number
  imageUrl: string
}

export const INGREDIENTS: SeedIngredient[] = [
  // --- Pizzas ---
  {
    translations: { en: 'Mozzarella', ru: 'Моцарелла', lv: 'Mozzarella', nl: 'Mozzarella' },
    price: 2,
    imageUrl: 'https://source.unsplash.com/400x400/?mozzarella'
  },
  {
    translations: {
      en: 'Tomato Sauce',
      ru: 'Томатный соус',
      lv: 'Tomātu mērce',
      nl: 'Tomatensaus'
    },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?tomato,sauce'
  },
  {
    translations: { en: 'Basil', ru: 'Базилик', lv: 'Baziliks', nl: 'Basilicum' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?basil'
  },
  {
    translations: { en: 'Pepperoni', ru: 'Пепперони', lv: 'Pepperoni', nl: 'Pepperoni' },
    price: 3,
    imageUrl: 'https://source.unsplash.com/400x400/?pepperoni'
  },
  {
    translations: { en: 'Ham', ru: 'Ветчина', lv: 'Šķiņķis', nl: 'Ham' },
    price: 2,
    imageUrl: 'https://source.unsplash.com/400x400/?ham'
  },
  {
    translations: { en: 'Pineapple', ru: 'Ананас', lv: 'Ananāss', nl: 'Ananas' },
    price: 2,
    imageUrl: 'https://source.unsplash.com/400x400/?pineapple'
  },
  {
    translations: { en: 'Cheddar', ru: 'Чеддер', lv: 'Čedar', nl: 'Cheddar' },
    price: 2,
    imageUrl: 'https://source.unsplash.com/400x400/?cheddar'
  },
  {
    translations: { en: 'Parmesan', ru: 'Пармезан', lv: 'Parmezāns', nl: 'Parmezaan' },
    price: 3,
    imageUrl: 'https://source.unsplash.com/400x400/?parmesan'
  },
  {
    translations: { en: 'Gorgonzola', ru: 'Горгонзола', lv: 'Gorgonzola', nl: 'Gorgonzola' },
    price: 3,
    imageUrl: 'https://source.unsplash.com/400x400/?gorgonzola'
  },
  {
    translations: { en: 'Chicken', ru: 'Курица', lv: 'Vistas', nl: 'Kip' },
    price: 3,
    imageUrl: 'https://source.unsplash.com/400x400/?chicken'
  },
  {
    translations: { en: 'BBQ Sauce', ru: 'Соус BBQ', lv: 'BBQ mērce', nl: 'BBQ saus' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?bbq'
  },
  {
    translations: { en: 'Red Onion', ru: 'Красный лук', lv: 'Sarkanais sīpols', nl: 'Rode ui' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?red,onion'
  },

  // --- Snacks ---
  {
    translations: { en: 'Potato', ru: 'Картофель', lv: 'Kartupeļi', nl: 'Aardappel' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?potato'
  },
  {
    translations: { en: 'Oil', ru: 'Масло', lv: 'Eļļa', nl: 'Olie' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?oil'
  },
  {
    translations: { en: 'Salt', ru: 'Соль', lv: 'Sāls', nl: 'Zout' },
    price: 0.5,
    imageUrl: 'https://source.unsplash.com/400x400/?salt'
  },
  {
    translations: { en: 'Breadcrumbs', ru: 'Панировка', lv: 'Maizītes', nl: 'Paneermeel' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?breadcrumbs'
  },
  {
    translations: { en: 'Cheese', ru: 'Сыр', lv: 'Siers', nl: 'Kaas' },
    price: 2,
    imageUrl: 'https://source.unsplash.com/400x400/?cheese'
  },
  {
    translations: { en: 'Onion', ru: 'Лук', lv: 'Sīpols', nl: 'Ui' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?onion'
  },
  {
    translations: { en: 'Garlic', ru: 'Чеснок', lv: 'Ķiploks', nl: 'Knoflook' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?garlic'
  },
  {
    translations: { en: 'Bread', ru: 'Хлеб', lv: 'Maize', nl: 'Brood' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?bread'
  },

  // --- Desserts ---
  {
    translations: { en: 'Chocolate', ru: 'Шоколад', lv: 'Šokolāde', nl: 'Chocolade' },
    price: 2,
    imageUrl: 'https://source.unsplash.com/400x400/?chocolate'
  },
  {
    translations: { en: 'Eggs', ru: 'Яйца', lv: 'Olas', nl: 'Eieren' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?eggs'
  },
  {
    translations: { en: 'Sugar', ru: 'Сахар', lv: 'Cukurs', nl: 'Suiker' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?sugar'
  },
  {
    translations: { en: 'Butter', ru: 'Масло', lv: 'Sviests', nl: 'Boter' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?butter'
  },
  {
    translations: { en: 'Milk', ru: 'Молоко', lv: 'Piens', nl: 'Melk' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?milk'
  },
  {
    translations: {
      en: 'Cheese (for cheesecake)',
      ru: 'Сыр (для чизкейка)',
      lv: 'Siers (cheesecake)',
      nl: 'Kaas (cheesecake)'
    },
    price: 2,
    imageUrl: 'https://source.unsplash.com/400x400/?cheesecake'
  },
  {
    translations: { en: 'Mascarpone', ru: 'Маскарпоне', lv: 'Maskarpone', nl: 'Mascarpone' },
    price: 3,
    imageUrl: 'https://source.unsplash.com/400x400/?mascarpone'
  },

  // --- Coffee ---
  {
    translations: {
      en: 'Coffee Beans',
      ru: 'Кофейные зерна',
      lv: 'Kafijas pupiņas',
      nl: 'Koffiebonen'
    },
    price: 3,
    imageUrl: 'https://source.unsplash.com/400x400/?coffee,beans'
  },
  {
    translations: { en: 'Espresso', ru: 'Эспрессо', lv: 'Espresso', nl: 'Espresso' },
    price: 2,
    imageUrl: 'https://source.unsplash.com/400x400/?espresso'
  },
  {
    translations: { en: 'Milk Foam', ru: 'Молочная пена', lv: 'Piena putas', nl: 'Melkschuim' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?milkfoam'
  },
  {
    translations: {
      en: 'Chocolate (for mocha)',
      ru: 'Шоколад (для мокко)',
      lv: 'Šokolāde (mocha)',
      nl: 'Chocolade (mocha)'
    },
    price: 2,
    imageUrl: 'https://source.unsplash.com/400x400/?chocolate,mocha'
  },

  // --- Cocktails ---
  {
    translations: { en: 'Rum', ru: 'Ром', lv: 'Rum', nl: 'Rum' },
    price: 3,
    imageUrl: 'https://source.unsplash.com/400x400/?rum'
  },
  {
    translations: { en: 'Mint', ru: 'Мята', lv: 'Piparmētra', nl: 'Munt' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?mint'
  },
  {
    translations: { en: 'Lime', ru: 'Лайм', lv: 'Laims', nl: 'Limoen' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?lime'
  },
  {
    translations: {
      en: 'Sugar (for cocktail)',
      ru: 'Сахар (для коктейля)',
      lv: 'Cukurs (kokteilim)',
      nl: 'Suiker (cocktail)'
    },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?sugar,cocktail'
  },

  // --- Drinks ---
  {
    translations: { en: 'Water', ru: 'Вода', lv: 'Ūdens', nl: 'Water' },
    price: 1,
    imageUrl: 'https://source.unsplash.com/400x400/?water'
  },
  {
    translations: {
      en: 'Orange Juice',
      ru: 'Апельсиновый сок',
      lv: 'Apelsīnu sula',
      nl: 'Sinaasappelsap'
    },
    price: 2,
    imageUrl: 'https://source.unsplash.com/400x400/?orange,juice'
  },
  {
    translations: { en: 'Apple Juice', ru: 'Яблочный сок', lv: 'Ābolu sula', nl: 'Appelsap' },
    price: 2,
    imageUrl: 'https://source.unsplash.com/400x400/?apple,juice'
  }
]

export async function seedIngredients(prisma: PrismaClient) {
  for (const ing of INGREDIENTS) {
    const created = await prisma.ingredient.create({
      data: {
        price: ing.price,
        imageUrl: ing.imageUrl
      }
    })

    for (const lang of ['en', 'ru', 'lv', 'nl'] as Language[]) {
      await prisma.translatedText.create({
        data: {
          language: lang,
          type: TranslationType.name,
          value: ing.translations[lang],
          ingredientId: created.id
        }
      })
    }
  }

  console.log('✅ Ingredients seeded with translations.')
}
