CREATE TABLE tickets
(
 tc_ticket_id INTEGER (5) NOT NULL,
 tc_booking VARCHAR (50)NOT NULL,
 tc_first_name VARCHAR (50),
 tc_last_name VARCHAR (),
 tc_DOB DATE,
 tc_seat_no INTEGER (2),
 PRIMARY KEY (tc_ticket_id)
);