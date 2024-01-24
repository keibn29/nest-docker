/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { createConnection, Connection } from 'mysql2/promise';

@Injectable()
export class SqlService {
  private connection: Connection;

  constructor() {
    this.connect();
  }

  async connect() {
    try {
      this.connection = await createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: parseInt(process.env.DB_PORT, 10),
      });

      console.log('Connected to MySQL database');
    } catch (error) {
      console.error('Error connecting to MySQL:', error.message);
    }
  }

  async query(sql: string, values?: any[]) {
    try {
      const [rows, fields] = await this.connection.execute(sql, values);
      return rows;
    } catch (error) {
      console.error('Error executing MySQL query:', error.message);
      throw error;
    }
  }

  async disconnect() {
    try {
      await this.connection.end();
      console.log('Disconnected from MySQL database');
    } catch (error) {
      console.error('Error disconnecting from MySQL:', error.message);
    }
  }
}
