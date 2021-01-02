import { Controller, Get, Param } from '@nestjs/common';
import { EntityParam } from 'src/decorators';
import { ParseEntity } from 'src/pipes';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

  constructor(private users_service: UsersService) {}
  
  @Get()
  selectAll(): Promise<User[]> {
    return this.users_service.selectAll();
  }

  @Get(':user')
  get(
    @EntityParam(User)
    user: User
  ): User {
    return user;
  }
}