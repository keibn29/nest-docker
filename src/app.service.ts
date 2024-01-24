import { BadRequestException, Injectable } from '@nestjs/common';
import { SqlService } from './mysql/mysql.service';

@Injectable()
export class AppService {
  constructor(private sqlService: SqlService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers() {
    await this.sqlService.connect();
    try {
      const result = await this.sqlService.query('SELECT * FROM users');
      return result;
    } catch (err) {
      throw new BadRequestException();
    }
  }
}
