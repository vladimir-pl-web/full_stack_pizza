import { PrismaClient } from '@prisma/client'

import { seedCategories } from './categories.ts'
import { seedIngredients } from './ingredients.ts'
import { seedProducts } from './products.ts'

const prisma = new PrismaClient()

async function main() {
  await seedCategories(prisma)
  await seedIngredients(prisma)
  await seedProducts(prisma)

  console.log('🌱 Full seeding complete')
}

main()
  .catch(console.error)
  .finally(async () => await prisma.$disconnect())
