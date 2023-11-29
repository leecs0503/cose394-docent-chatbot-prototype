export abstract class BaseDB {
  constructor () {}
  abstract get(sql: string, args: any[]);
}
