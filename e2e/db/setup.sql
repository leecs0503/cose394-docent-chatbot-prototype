CREATE TABLE place (
    id   INT          AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)                NOT NULL
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE art_work (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    place_id    INT                NOT NULL,
    name        VARCHAR(255)       NOT NULL,
    summary     VARCHAR(1000),
    description VARCHAR(10000)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE path (
    id   INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)       NOT NULL
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE path_point (
    id      INT AUTO_INCREMENT PRIMARY KEY,
    path_id INT                NOT NULL,
    x INT                      NOT NULL,
    y INT                      NOT NULL
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


INSERT INTO path (id, name) VALUES (0, "추천루트01");
INSERT INTO path_point (ID, x, y, path_id) VALUES (0, 140, 406, 0), (1, 487, 82, 0);
INSERT INTO place (ID, name) VALUES (0, "고려대박물관");
INSERT INTO art_work (ID, name, summary, description) VALUES (0, "세모", "세모입니다", "검정색으로 구성된 세모는 …..."), (1, "네모", "네모입니다", "검정색으로 구성된 네모는 …...");
INSERT INTO path (id, name) VALUES (0, "추천루트01");
INSERT INTO path_point (ID, x, y, path_id) VALUES (0, 140, 406, 0), (1, 487, 82, 0);
