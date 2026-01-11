import { CatalogBaseResponse, Locale } from '@workspace/types'

import { instance } from './api'
import { Endpoints } from './endpoints'

class CatalogServices {
  async getCatalogData(locale: Locale) {
    const data = await instance<CatalogBaseResponse>({
      url: `${locale}${Endpoints.CATALOG}/base`,
      method: 'GET'
    })
    return data.data
  }
}

const Catalog = new CatalogServices()
export default Catalog
