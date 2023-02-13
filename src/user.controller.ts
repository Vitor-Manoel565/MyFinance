import { Body, Controller, Headers, Post } from '@nestjs/common';
import { RepositoryUsers } from './user.repository';

@Controller('/users')
export class UserController {
  @Post()
  async create(@Body() DataUser, @Headers() token) {
    const repository = new RepositoryUsers();
    await repository.salvar(DataUser);
    console.log(DataUser);

    return { DataUser, token: token };
  }
}
