import { Injectable } from '@nestjs/common'
import {
  CatalogBaseResponse,
  CategoryDto,
  IngredientDto,
  Locale,
  ProductDto
} from '@workspace/types'
import { PrismaService } from 'prisma/prisma.service'
@Injectable()
export class CatalogService {
  constructor(private prisma: PrismaService) {}

  async getBase(locale: Locale = 'en'): Promise<CatalogBaseResponse> {
    try {
      const [categoriesRow, ingredientsRow, productsRow] = await Promise.all([
        this.prisma.category.findMany({
          include: {
            translations: {
              where: { language: locale },
              select: { value: true, type: true }
            }
          }
        }),
        this.prisma.ingredient.findMany({
          include: {
            translations: {
              where: { language: locale },
              select: { value: true, type: true }
            }
          }
        }),
        this.prisma.product.findMany({
          include: {
            translations: {
              where: { language: locale },
              select: { value: true, type: true }
            },
            items: true,
            category: {
              include: {
                translations: {
                  where: { language: locale },
                  select: { value: true, type: true }
                }
              }
            },
            ingredients: {
              include: {
                translations: {
                  where: { language: locale },
                  select: { value: true, type: true }
                }
              }
            }
          },
          orderBy: { id: 'asc' },
          take: 12
        })
      ])

      const categories: CategoryDto[] = categoriesRow.map((c) => ({
        id: c.id,
        name: c.translations[0]?.value ?? 'Unnamed'
      }))

      const ingredients: IngredientDto[] = ingredientsRow.map((i) => ({
        id: i.id,
        name: i.translations[0]?.value ?? 'Unnamed',
        imageUrl: i.imageUrl,
        price: i.price
      }))

      const products: ProductDto[] = productsRow.map((p) => ({
        id: p.id,
        name: p.translations[0]?.value ?? 'Unnamed',
        description: p.translations[0]?.value ?? 'No description',
        imageUrl: p.imageUrl,
        categoryId: p.categoryId,
        categoryName: p.category.translations[0]?.value ?? 'Unnamed',
        ingredients: p.ingredients.map((ing) => ({
          id: ing.id,
          name: ing.translations[0]?.value ?? 'Unnamed',
          price: ing.price,
          imageUrl: ing.imageUrl
        })),
        price: p.items[0]?.price ?? 0
      }))

      const lastProduct = productsRow.at(-1)
      const nextCursor = lastProduct?.id ?? null
      return {
        locale,
        data: {
          categories,
          ingredients,
          products
        },
        nextCursor
      } as unknown as CatalogBaseResponse
    } catch (error) {
      console.error('Error fetching catalog base:', error)
      throw new Error('Failed to fetch catalog data')
    }
  }
}
