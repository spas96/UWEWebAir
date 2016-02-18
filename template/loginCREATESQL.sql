CREATE TABLE login
(
 lg_first_name INTEGER (3) NOT NULL,
 lg_last_name VARCHAR (50)NOT NULL,
 lg_email VARCHAR (50) NOT NULL,
 lg_password VARCHAR (50) NOT NULL,
 lg_usertype VARCHAR (8) NOT NULL,
 PRIMARY KEY (lg_email)
);