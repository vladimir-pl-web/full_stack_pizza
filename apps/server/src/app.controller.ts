import { Controller, Get } from '@nestjs/common'

import { AppService } from './app.service'
import { UserEntity } from './cl'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): UserEntity {
    return this.appService.getHello()
  }
}
