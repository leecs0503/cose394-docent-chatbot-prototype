CREATE TABLE place (
    id          INT          PRIMARY KEY,
    name        VARCHAR(255) NOT NULL
    description VARCHAR(500) NOT NULL DEFAULT ''
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE art_work (
    id          INT          PRIMARY KEY,
    place_id    INT          NOT NULL,
    name        VARCHAR(255) NOT NULL,
    summary     VARCHAR(1000),
    description VARCHAR(10000),
    INDEX (place_id)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE path (
    id       INT          NOT NULL,
    place_id INT          NOT NULL,
    name     VARCHAR(255) NOT NULL,
    INDEX       (place_id),
    PRIMARY KEY (id, place_id)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE path_point (
    id      INT NOT NULL,
    path_id INT NOT NULL,
    x       INT NOT NULL,
    y       INT NOT NULL,
    INDEX       (path_id),
    PRIMARY KEY (id, path_id)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET NAMES 'utf8mb4' COLLATE 'utf8mb4_unicode_ci';



-- place 쿼리:
INSERT INTO place (id, name)
       VALUES (1, "고려대박물관");

-- artwork 쿼리:
INSERT INTO art_work (id, name, summary, description, place_id)
       VALUES (0, "세모", "세모입니다", "검정색으로 구성된 세모는 …...", 1),
              (1, "네모", "네모입니다", "검정색으로 구성된 네모는 …...", 1);

-- path 관련 쿼리:
-- pathID: 1 (파일: 추천루트01.xlsx)
INSERT INTO path (id, place_id, name)
       VALUES (1, 1, "추천루트01");
INSERT INTO path_point (id, x, y, path_id)
       VALUES (0, 140, 406, 1),
              (1, 487, 82, 1);
