CREATE TABLE place (
    id   INT          PRIMARY KEY,
    name VARCHAR(255) NOT NULL
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE art_work (
    id          INT          PRIMARY KEY,
    place_id    INT          NOT NULL,
    name        VARCHAR(255) NOT NULL,
    summary     VARCHAR(1000),
    description VARCHAR(10000)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE path (
    id       INT          NOT NULL,
    place_id INT          NOT NULL,
    name     VARCHAR(255) NOT NULL,
    PRIMARY KEY (id, place_id)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE path_point (
    id      INT NOT NULL,
    path_id INT NOT NULL,
    x       INT NOT NULL,
    y       INT NOT NULL,
    PRIMARY KEY (id, path_id)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET NAMES 'utf8mb4' COLLATE 'utf8mb4_unicode_ci';
