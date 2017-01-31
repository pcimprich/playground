/* creates db uder */

DROP USER IF EXISTS 'petr'@'localhost';

CREATE USER 'petr'@'localhost' IDENTIFIED BY 'AliKoko2015';

GRANT ALL ON ubqres.* TO 'petr'@'localhost';