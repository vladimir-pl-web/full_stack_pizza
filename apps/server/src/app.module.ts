import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common'

import { PrismaModule } from '../prisma/prisma.module'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatalogModule } from './catalog/catalog.module'
import { LocaleMiddleware } from './middleware/locale.middleware'

@Module({
  imports: [PrismaModule, CatalogModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LocaleMiddleware)
      .exclude('admin/*path')
      .forRoutes({ path: ':locale/*path', method: RequestMethod.ALL })
  }
}
