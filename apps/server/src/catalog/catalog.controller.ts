import { Controller, Get, HttpCode, UseGuards } from '@nestjs/common'
import type { Locale } from '@workspace/types'
import { LocaleParam } from 'src/decorators/locale.decorator'
import { LocaleGuard } from 'src/guards/locale.guard'

import { CatalogService } from './catalog.service'

@Controller(':locale/catalog')
@UseGuards(LocaleGuard)
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get('base')
  @HttpCode(200)
  async getBaseCatalog(@LocaleParam() lang: Locale) {
    return this.catalogService.getBase(lang)
  }
}
