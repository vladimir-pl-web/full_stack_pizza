import { Controller, Delete, Get, HttpCode, Param, Query, UseGuards } from '@nestjs/common'
import { Locale } from '@workspace/types'
import { LocaleParam } from 'src/decorators/locale.decorator'
import { LocaleGuard } from 'src/guards/locale.guard'

// import { CreateProductDto } from './dto/create-product.dto'
// import { UpdateProductDto } from './dto/update-product.dto'
import { ProductService } from './product.service'

@Controller(':locale/catalog')
@UseGuards(LocaleGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // @Post()
  // create(@Body() createProductDto: CreateProductDto) {
  //   return this.productService.create(createProductDto)
  // }

  @Get('products')
  @HttpCode(200)
  async getPagedProducts(
    @LocaleParam() lang: Locale,
    @Query('cursor') cursor?: number,
    @Query('limit') limit = 12
  ) {
    return this.productService.getPagedProducts(lang, limit, cursor)
  }

  @Get(':id')
  findProductById(@Param('id') id: string) {
    return this.productService.findProductById(+id)
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
  //   return this.productService.update(+id, updateProductDto)
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id)
  }
}
