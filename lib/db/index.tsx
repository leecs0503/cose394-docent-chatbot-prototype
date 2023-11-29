import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
} from "../constants";

import {DBHandler} from "./dbHandler";
import {MysqlDB} from "./mysqlDb";

const mysqlDB = new MysqlDB(
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
);

export const dbHandler = new DBHandler(mysqlDB);