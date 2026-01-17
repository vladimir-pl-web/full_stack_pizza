import { CatalogPageDto } from '@workspace/types'

import { Locale } from '~/lib/i18n/config'

import { instance } from './api'
import { Endpoints } from './endpoints'

class ProductsService {
  async fetchNewProducts(locale: Locale, cursor?: number): Promise<CatalogPageDto> {
    const res = await instance<CatalogPageDto>({
      url: `${locale}${Endpoints.CATALOG}${Endpoints.PRODUCTS}?cursor=${cursor}`,
      method: 'GET'
    })
    return res.data
  }
}
export default new ProductsService()
