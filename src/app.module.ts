import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env['MONGO_SRV'], {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
      readPreference: 'primary',
      writeConcern: { w: 'majority', j: true },

      connectionFactory: (connection) => {
        global.$db = connection;
        return connection;
      }
    }),

    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
