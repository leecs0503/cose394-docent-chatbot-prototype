import pgPromise from "pg-promise";

import {BaseDB} from "./db";

export class PostgresSqlDB extends BaseDB {
  private db;

  constructor (
    dbHost: string,
    dbUser: string,
    dbPassword: string,
    dbName: string,
  ) {
    super();
    this.db = pgPromise()({
      host: dbHost,
      port: 5432,
      user: dbUser,
      password: dbPassword,
      database: dbName,
    });
  }

  @sqlTransform
  async get(
    sql: string,
    args: any[],
  ) {
      const result = await this.db.query(sql, args);
      return result[0];
  }
}

function sqlTransform(target: any, key: string, descriptor: PropertyDescriptor) {
  const fn = descriptor.value!;

  descriptor.value = async function (sql: string, args: any[]) {
    return await fn.call(this, [convertQuery(sql), args]);
  };
}

function convertQuery(query) {
  let index = 1;
  return query.replace(/\?/g, () => `$${index++}`);
}
