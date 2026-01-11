import { NestFactory } from '@nestjs/core'

import { PrismaService } from '../prisma/prisma.service'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const prismaService = app.get(PrismaService)
  const PORT = process.env.PORT ?? 4200
  prismaService.enableShutdownHooks(app)
  app.setGlobalPrefix('api')
  app.enableCors()
  await app.listen(PORT)
}
bootstrap()
