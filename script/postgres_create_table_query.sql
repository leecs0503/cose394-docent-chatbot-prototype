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
