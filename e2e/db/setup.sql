CREATE TABLE place (
    id          SERIAL       PRIMARY KEY,
    name        VARCHAR(255) NOT NULL,
    description TEXT         NOT NULL DEFAULT ''
);

CREATE TABLE art_work (
    id          SERIAL       PRIMARY KEY,
    place_id    INT          NOT NULL,
    name        VARCHAR(255) NOT NULL,
    summary     TEXT,
    description TEXT
);

CREATE TABLE path (
    id          SERIAL       NOT NULL,
    place_id    INT          NOT NULL,
    name        VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL DEFAULT '',
    PRIMARY KEY (id, place_id)
);

CREATE TABLE path_point (
    id      SERIAL NOT NULL,
    path_id INT    NOT NULL,
    x       INT    NOT NULL,
    y       INT    NOT NULL,
    PRIMARY KEY (id, path_id)
);



-- place 쿼리:
INSERT INTO place (id, name)
       VALUES (1, '고려대박물관');

-- artwork 쿼리:
INSERT INTO art_work (id, name, summary, description, place_id)
       VALUES (0, '세모', '세모입니다', '검정색으로 구성된 세모는 …...', 1),
              (1, '네모', '네모입니다', '검정색으로 구성된 네모는 …...', 1);

-- path 관련 쿼리:
-- pathID: 1 (파일: 추천루트01.xlsx)
INSERT INTO path (id, place_id, name)
       VALUES (1, 1, '추천루트01');
INSERT INTO path_point (id, x, y, path_id)
       VALUES (0, 140, 406, 1),
              (1, 487, 82, 1);
