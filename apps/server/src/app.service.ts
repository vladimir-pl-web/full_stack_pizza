import { Injectable } from '@nestjs/common'

import { UserEntity } from './cl'

@Injectable()
export class AppService {
  getHello(): UserEntity {
    return new UserEntity({
      id: 1,
      firstName: 'John',
      lastName: 'Doe'
    })
  }
}
