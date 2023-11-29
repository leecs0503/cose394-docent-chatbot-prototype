import mysql from "mysql2/promise";

import {BaseDB} from "./db";

export class MysqlDB extends BaseDB {
  private pool;
  private ready;

  constructor (
    dbHost: string,
    dbUser: string,
    dbPassword: string,
    dbName: string,
  ) {
    super();
    this.ready = new Promise(async (res, rej)=>{
      this.pool = await mysql.createPool({
        host     : dbHost,
        user     : dbUser,
        password : dbPassword,
        database : dbName,
        rowsAsArray: true,
      });
      res(true);
    });
  }

  async get(
    sql: string,
    args: any[],
  ) {
      await this.ready;
      const result = await this.pool.query(sql, args);
      return result[0];
  }
}
