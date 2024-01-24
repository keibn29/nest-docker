import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SqlModule } from './mysql/mysql.module';

@Module({
  imports: [SqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
