import {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_SSL,
} from "../constants";

import {DBHandler} from "./dbHandler";
import { PostgresSqlDB } from "./postgresSqlDb";
// import {MysqlDB} from "./mysqlDb";

// const mysqlDB = new MysqlDB(
//     DB_HOST,
//     DB_USER,
//     DB_PASSWORD,
//     DB_NAME,
// );


const postgresSqlDB = new PostgresSqlDB(
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_NAME,
    DB_SSL,
);

export const dbHandler = new DBHandler(postgresSqlDB);
