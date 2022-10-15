CREATE TABLE teams(
    team_id BIGSERIAL NOT NULL PRIMARY KEY,
    team_name VARCHAR(64) NOT NULL
);

INSERT INTO teams(team_name) VALUES('barsa');
INSERT INTO teams(team_name) VALUES('real');
INSERT INTO teams(team_name) VALUES('city');

CREATE TABLE users(
    user_id BIGSERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(64) NOT NULL,
    user_password VARCHAR(64) NOT NULL
);

INSERT INTO users(username, user_password) VALUES('sherzod', '123');