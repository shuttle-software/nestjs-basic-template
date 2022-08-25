import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from '../services/users.service';

describe('AppController', () => {
  let app_service: UsersService;

  // beforeEach(async () => {
  //   const app: TestingModule = await Test.createTestingModule({
  //     providers: [UsersService],
  //   }).compile();

  //   app_service = app.get<UsersService>(UsersService);
  // });

  // describe('root', () => {
  //   it('should return "Hello World!"', async () => {
  //     const result = await app_service.selectAll()
  //     expect(result.length).toBe(1);
  //   });
  // });
});
