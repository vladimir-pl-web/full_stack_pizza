import { CatalogBaseResponse, Locale } from '@workspace/types'

import { instance } from './api'
import { Endpoints } from './endpoints'

class CatalogServices {
  async getCatalogData(locale: Locale): Promise<CatalogBaseResponse> {
    const res = await instance<CatalogBaseResponse>({
      url: `${locale}${Endpoints.CATALOG}/base`,
      method: 'GET'
    })
    return res.data
  }
}

export default new CatalogServices()
