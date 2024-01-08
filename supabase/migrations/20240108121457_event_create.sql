 CREATE TABLE event (
   id SERIAL PRIMARY KEY,
   name VARCHAR(255),
   category VARCHAR(255),
   date DATE NOT NULL
 );
