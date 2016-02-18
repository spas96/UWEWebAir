CREATE TABLE fixed_fare
(
 ff_fare_num INTEGER (3) NOT NULL,
 ff_journey_start VARCHAR (50),
 ff_journey_end	VARCHAR (50),
 ff_journey_fare DECIMAL (5,2),
 PRIMARY KEY (ff_fare_num)
);
