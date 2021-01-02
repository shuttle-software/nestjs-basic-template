import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InvalidArgException } from 'src/exceptions';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private users_repository: Repository<User>,
  ) {}

  async selectAll(): Promise<User[]> {
    let user = this.users_repository.create({
      name: 'lol',
      active: true,
    });
    await user.save();

    throw new InvalidArgException('wrong-lol', 'Ahahahah');

    return await this.users_repository.find();
  }
}