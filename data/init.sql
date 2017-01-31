/*  ----- Tables ----- 

 category
 competition
 club
 team
 competition_record
 game
*/

DROP TABLE IF EXISTS category;
CREATE TABLE category (
	id INT PRIMARY KEY,
	name CHAR(25) NOT NULL
);
GRANT ALL ON category TO 'petr'@'localhost';

DROP TABLE IF EXISTS competition;
CREATE TABLE competition (
	id INT PRIMARY KEY,
	name CHAR(255) NOT NULL,
	category INT NOT NULL,
	season CHAR(25) NOT NULL,
	year YEAR NOT NULL,
	active BOOLEAN NOT NULL
);
GRANT ALL ON competition TO 'petr'@'localhost';

DROP TABLE IF EXISTS club;
CREATE TABLE club (
	id INT PRIMARY KEY,
	name CHAR(25) NOT NULL
);
GRANT ALL ON club TO 'petr'@'localhost';

DROP TABLE IF EXISTS team;
CREATE TABLE team (
	id INT PRIMARY KEY,
	name CHAR(255) NOT NULL,
	club INT NOT NULL,
	category INT NOT NULL,
	competition INT /* active competition */
);
GRANT ALL ON team TO 'petr'@'localhost';

DROP TABLE IF EXISTS game;
CREATE TABLE game (
	id INT PRIMARY KEY AUTO_INCREMENT,
	date DATE NOT NULL,
	competition INT NOT NULL,
	team_a INT NOT NULL,
	team_b INT NOT NULL,
	full_a SMALLINT NOT NULL,
	full_b SMALLINT NOT NULL,
	half_a SMALLINT,
	half_b SMALLINT,
	tries_a SMALLINT,
	tries_b SMALLINT,
	round SMALLINT,
	forfeit BOOLEAN NOT NULL
);
GRANT ALL ON game TO 'petr'@'localhost';

DROP TABLE IF EXISTS competition_record;
/* table not needed now
CREATE TABLE competition_record (
	id INT PRIMARY KEY,
	competition INT NOT NULL,
	team INT NOT NULL,
    points_regular SMALLINT NOT NULL,
	points_bonus SMALLINT NOT NULL,
	points_total SMALLINT NOT NULL,
	score_plus SMALLINT NOT NULL,
	score_minus SMALLINT NOT NULL,
	score_diff SMALLINT NOT NULL,
	games SMALLINT NOT NULL,
	wins SMALLINT NOT NULL,
	defeats SMALLINT NOT NULL,
	draws SMALLINT NOT NULL,
	active BOOLEAN NOT NULL
);
GRANT ALL ON competition_record TO 'petr'@'localhost';
*/

/* ----- Data ----- */

/* -- Categories -- */
INSERT INTO category VALUES (1, 'Seniors');
INSERT INTO category VALUES (2, 'Under 18');
INSERT INTO category VALUES (3, 'Under 16');

/* -- Competitions -- */
INSERT INTO competition VALUES (1, 'Extraliga', 1, '2016/17', 2016, true);
INSERT INTO competition VALUES (2, '1. liga Čechy', 1, '2016/17', 2016, true);
INSERT INTO competition VALUES (3, '1. liga Morava', 1, '2016/17', 2016, true);
INSERT INTO competition VALUES (4, '2. liga Čechy', 1, '2016/17', 2016, true);
INSERT INTO competition VALUES (5, 'CLJ U18', 2, '2016/17', 2016, true);
INSERT INTO competition VALUES (6, 'CLK U16', 3, '2016/17', 2016, true);

/* -- Clubs -- */
INSERT INTO club VALUES (1, 'RC Dragon Brno');
INSERT INTO club VALUES (2, 'RC Mountfield Říčany');
INSERT INTO club VALUES (3, 'RC Slavia Praha');
INSERT INTO club VALUES (4, 'RC Havířov');
INSERT INTO club VALUES (5, 'JIMMI RC Vyškov');
INSERT INTO club VALUES (6, 'RC Sparta Praha');
INSERT INTO club VALUES (7, 'RC Tatra Smíchov');
INSERT INTO club VALUES (8, 'RC Bystrc');
INSERT INTO club VALUES (9, 'RK Petrovice');
INSERT INTO club VALUES (10, 'RC Praga Praha');

/* -- Teams -- */
/* U18 teams */
INSERT INTO team VALUES (1, 'RC Dragon Brno U18', 1, 2, 5);
INSERT INTO team VALUES (2, 'RC Mountfield Říčany U18', 2, 2, 5);
INSERT INTO team VALUES (3, 'RC Slavia Praha U18', 3, 2, 5);
INSERT INTO team VALUES (4, 'RC Havířov U18', 4, 2, 5);
INSERT INTO team VALUES (5, 'JIMMI RC Vyškov U18', 5, 2, 5);
INSERT INTO team VALUES (6, 'RC Sparta Praha U18', 6, 2, 5);
INSERT INTO team VALUES (7, 'RC Tatra Smíchov U18', 7, 2, 5);
INSERT INTO team VALUES (8, 'RC Bystrc U18', 8, 2, 5);
INSERT INTO team VALUES (9, 'RK Petrovice U18', 8, 2, 5);
/* A teams */
INSERT INTO team VALUES (10, 'RC Dragon Brno A', 1, 1, 1);
INSERT INTO team VALUES (11, 'RC Mountfield Říčany A', 2, 1, 1);
INSERT INTO team VALUES (12, 'RC Slavia Praha A', 3, 1, 1);
INSERT INTO team VALUES (13, 'RC Praga Praha A', 10, 1, 1);
INSERT INTO team VALUES (14, 'JIMMI RC Vyškov A', 5, 1, 1);
INSERT INTO team VALUES (15, 'RC Sparta Praha A', 6, 1, 1);
INSERT INTO team VALUES (16, 'RC Tatra Smíchov A', 7, 1, 1);

/* -- Games -- */
INSERT INTO game VALUES (1, '2016-09-24', 5, 7, 5, 30, 0, null, null, null, null, 1, true);
INSERT INTO game VALUES (2, '2016-09-24', 5, 3, 1, 17, 40, null, null, null, null, 1, false);
INSERT INTO game VALUES (3, '2016-09-24', 5, 8, 9, 31, 27, null, null, null, null, 1, false);
INSERT INTO game VALUES (4, '2016-09-24', 5, 6, 4, 19, 12, null, null, null, null, 1, false);
INSERT INTO game VALUES (5, '2016-10-01', 5, 9, 6, 15, 40, null, null, null, null, 2, false);
INSERT INTO game VALUES (6, '2016-10-01', 5, 1, 8, 50, 7, null, null, null, null, 2, false);
INSERT INTO game VALUES (7, '2016-10-01', 5, 5, 3, 22, 49, null, null, null, null, 2, false);
INSERT INTO game VALUES (8, '2016-10-01', 5, 2, 7, 19, 15, null, null, null, null, 2, false);
INSERT INTO game VALUES (9, '2016-10-08', 5, 3, 2, 0, 39, null, null, null, null, 3, false);
INSERT INTO game VALUES (10, '2016-10-08', 5, 8, 5, 29, 29, null, null, null, null, 3, false);
INSERT INTO game VALUES (11, '2016-10-08', 5, 6, 1, 0, 46, null, null, null, null, 3, false);
INSERT INTO game VALUES (12, '2016-10-08', 5, 4, 9, 43, 7, null, null, null, null, 3, false);
INSERT INTO game VALUES (13, '2016-10-15', 5, 1, 4, 58, 0, null, null, null, null, 4, false);
INSERT INTO game VALUES (14, '2016-10-15', 5, 5, 6, 29, 7, null, null, null, null, 4, false);
INSERT INTO game VALUES (15, '2016-10-15', 5, 2, 8, 74, 0, null, null, null, null, 4, false);
INSERT INTO game VALUES (16, '2016-10-15', 5, 7, 3, 7, 29, null, null, null, null, 4, false);
INSERT INTO game VALUES (17, '2016-10-22', 5, 8, 7, 0, 43, null, null, null, null, 5, false);
INSERT INTO game VALUES (18, '2016-11-17', 5, 6, 2, 3, 52, 3, 35, null, null, 5, false);
INSERT INTO game VALUES (19, '2016-10-22', 5, 4, 5, 52, 17, null, null, null, null, 5, false);
INSERT INTO game VALUES (20, '2016-10-22', 5, 9, 1, 10, 41, null, null, null, null, 5, false);
INSERT INTO game VALUES (21, '2016-11-05', 5, 5, 9, 31, 29, null, null, null, null, 6, false);
INSERT INTO game VALUES (22, '2016-11-05', 5, 2, 4, 84, 0, null, null, null, null, 6, false);
INSERT INTO game VALUES (23, '2016-11-05', 5, 7, 6, 43, 19, null, null, null, null, 6, false);
INSERT INTO game VALUES (24, '2016-11-05', 5, 3, 8, 62, 5, null, null, null, null, 6, false);
INSERT INTO game VALUES (25, '2016-11-20', 5, 6, 3, 19, 20, 5, 5, null, null, 7, false);
INSERT INTO game VALUES (26, '2016-11-17', 5, 4, 7, 22, 19, 7, 12, null, null, 7, false);
/* game 27 postponed */
INSERT INTO game VALUES (28, '2016-11-19', 5, 1, 5, 59, 12, 33, 7, null, null, 7, false);
