import { ModelParam } from '@/decorators';
import { Controller, Get, Param } from '@nestjs/common';
import { User } from '@/schemas';
// import { EntityParam } from 'src/decorators';
// import { ParseEntity } from 'src/pipes';
// import { User } from './user.model';
import { UsersService } from './services/users.service';

@Controller('users')
export class UsersController {

  constructor(
    private users_service: UsersService,
  ) {}
  
  @Get()
  selectAll(): Promise<User[]> {
    return this.users_service.selectAll();
  }

  @Get(':user')
  get(
    @ModelParam(User)
    user: User
  ): User {
    return user;
  }
}