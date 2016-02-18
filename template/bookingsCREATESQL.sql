CREATE TABLE bookings
(
 bk_route INTEGER (3) NOT NULL,
 bk_date DATE NOT NULL,
 bk_journey_depart VARCHAR (50) NOT NULL,
 bk_journey_arrive VARCHAR (8) NOT NULL,
 bk_depart_time TIME NOT NULL,
 bk_arrival_time TIME NOT NULL,
 bk_seats_occupied VARCHAR (8) NOT NULL,
 bk_seats_available VARCHAR (8) NOT NULL,
 bk_cancellation INTEGER (1)
);