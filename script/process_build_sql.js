const fs = require('fs').promises;

const readXlsxFile = require('read-excel-file/node');


RESULT_FILE_PATH = "./e2e/db/setup.sql";

ROOT_PATH = "./.data/result";
ART_WORK_FILE_NAME = "작품.xlsx";
PATH_FILE_PREFIX = "추천루트";

TABLE_NAME_PLACE = "place";
TABLE_NAME_ART_WORK = "art_work";
TABLE_NAME_PATH = "path";
TABLE_NAME_PATH_POINT = "path_point";

CREATE_TABLE_SQL_FILE_PATH = "./script/create_table_query.sql";

// XXX: To simplize the code, use global variable. (because it's script.)
let placeID = 0;
let pathID = 0;

const Main = async () => {
    // 1. build insert sql from excels
    // 2. read create table sql
    // 3. make init sql file to ./e2e/db/setup.sql


    // 1. build insert sql from excels
    const files = await fs.readdir(ROOT_PATH);
    const result = [];
    for (const placeName of files) {
        if (placeName.includes("README")) {
            continue;
        }
        insertSqls = await processPlace(placeName);
        result.push(...insertSqls);
    }

    // 2. read create table sql
    const create_table_sql = (await fs.readFile(CREATE_TABLE_SQL_FILE_PATH)).toString();

    // 3. make init sql file to ./.data/setup.sql
    const finalResult = create_table_sql + "\n\n" + result.join("\n") + "\n";
    await fs.writeFile(RESULT_FILE_PATH, finalResult);
};

const processPlace = async(placeName) => {
    // 1. process place
    // 2. process artwork file
    // 3. process paths
    // 4. accumulate placeID

    const placePath = `${ROOT_PATH}/${placeName}`;
    // 1. process place
    const placeResult = await processPlaceQuery(placeName);
    // 2. process artwork file
    const artworkResult = await processArtwork(placePath);
    // 3. process paths
    const pathsResult = await processPaths(placePath);
    // 4. accumulate placeID
    placeID += 1;

    return [
        ...placeResult,
        ...artworkResult,
        ...pathsResult,
    ];
};

const processPlaceQuery = async (placeName) => {
    const placeData = {
        key: ["ID", "name"],
        values: [[placeID, placeName]],
    };
    const placeResult = InsertQueryOf(TABLE_NAME_PLACE, placeData);
    return [placeResult];
};

const processArtwork = async (placePath) => {
    const artworksFilePath = `${placePath}/${ART_WORK_FILE_NAME}`;
    const artworksData = await ReadExcel(artworksFilePath);
    const artworkResult = InsertQueryOf(TABLE_NAME_ART_WORK, artworksData);
    return [artworkResult];
};

const processPaths = async (placePath) => {
    // 1. find files
    //   for each file
    //     1. process path sql
    //     2. process path point sql
    //     3. accumulate result
    const files = await fs.readdir(placePath);
    const result = [];
    for (const fileName of files) {
        if (!fileName.includes(PATH_FILE_PREFIX)) {
            continue;
        }
        if (!fileName.includes(".xlsx")) {
            continue;
        }
        const filePath = `${placePath}/${fileName}`;
        // 1. process path sql
        const pathResult = await ProcessPath(pathID, fileName.replace(".xlsx", ""));

        // 2. process path sql
        const pathPointResult = await ProcessPathPoint(filePath);

        // 3. accumulate result
        result.push(...pathResult)
        result.push(...pathPointResult);
        pathID += 1;
    }
    return result;
};

const ProcessPath = async (pathID, name) => {
    const data = {
        key: ["id", "name"],
        values: [[pathID, name]],
    };
    return [InsertQueryOf(TABLE_NAME_PATH, data)];
};

const ProcessPathPoint = async (filePath) => {
    const data = await ReadExcel(filePath);
    AddConstantValueToData(data, "path_id", pathID);
    return [InsertQueryOf(TABLE_NAME_PATH_POINT, data)];
};

const ReadExcel = async (path) => {
    const rows = await readXlsxFile(path);
    if (rows.length == 0) exit(1);
    return {
        key: rows[0],
        values: rows.slice(1),
    };
};

const InsertQueryOf = (tableName, data) => {
    const keyQuery = `(${data.key.join(", ")})`;
    const valuesQuery = data.values.map(value => `(${value.map(
        x=>(isNaN(x))?`"${x}"`:x
    ).join(", ")})`).join(", ");
    return `INSERT INTO ${tableName} ${keyQuery} VALUES ${valuesQuery};`;
};

const AddConstantValueToData = (data, key, value) => {
    data.key.push(key);
    data.values.map(arr=>arr.push(value));
};

(async () => {
    Main();
})();
