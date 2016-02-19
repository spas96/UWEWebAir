CREATE TABLE journey_times
(
 jt_route_number INTEGER (3) NOT NULL,
 jt_leave_destination VARCHAR (25),
 jt_leave_time TIME,
 jt_arrive_destination VARCHAR (25),
 jt_arrive_time TIME,
 jt_seats_available INTEGER(3)
);
