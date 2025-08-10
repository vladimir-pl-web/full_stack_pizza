export class UserEntity {
  id: number
  firstName: string
  lastName: string

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial)
  }
}
