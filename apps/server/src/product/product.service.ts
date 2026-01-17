import { Injectable } from '@nestjs/common'
import { CatalogPageDto, Locale, ProductDto } from '@workspace/types'
import { PrismaService } from 'prisma/prisma.service'

// import { CreateProductDto } from './dto/create-product.dto'
// import { UpdateProductDto } from './dto/update-product.dto'

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  // create() {
  //   return 'This action adds a new product'
  // }

  async getPagedProducts(locale: Locale, limit: number, cursor?: number): Promise<CatalogPageDto> {
    try {
      const productsRow = await this.prisma.product.findMany({
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
        take: +limit + 1,
        ...(cursor && {
          cursor: { id: +cursor },
          skip: 1
        })
      })
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
      const hasNext = products.length > limit
      const items = hasNext ? products.slice(0, limit) : products
      return {
        products: items,
        ...(hasNext && { nextCursor: items[items.length - 1].id })
      }
    } catch (error) {
      console.error('Error fetching products', error)
      throw new Error(`Failed to fetch products ${error}`)
    }
  }

  findProductById(id: number) {
    return `This action returns a #${id} product`
  }

  // update(id: number, updateProductDto: UpdateProductDto) {
  //   return `This action updates a #${id} product`
  // }

  remove(id: number) {
    return `This action removes a #${id} product`
  }
}
