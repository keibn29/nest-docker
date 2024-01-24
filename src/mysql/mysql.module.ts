import { Global, Module } from '@nestjs/common';
import { SqlService } from './mysql.service';

@Global()
@Module({
  providers: [SqlService],
  exports: [SqlService],
})
export class SqlModule {}
