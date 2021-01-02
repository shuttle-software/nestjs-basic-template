import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',

      host: process.env['POSTGRES_HOST'],
      port: parseInt(process.env['POSTGRES_PORT']),
      username: process.env['POSTGRES_USER'],
      password: process.env['POSTGRES_PASSWORD'],
      database: process.env['POSTGRES_DATABASE'],

      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,

      // migrationsTableName: 'migration',
      // migrations: ['src/migration/*.ts'],
      // cli: {
      //   migrationsDir: 'src/migration',
      // },
      // ssl: this.isProduction(),
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
