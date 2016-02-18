CREATE TABLE journey_times
(
jt_route_num integer (3) NOT NULL,
jt_leave_dest varchar (25),
jt_leave_time time (6),
jt_arrive_dest varchar (25),
jt_arrive_time time (6),
jt_seats_available integer(3),
PRIMARY KEY (jt_route_num );
);
