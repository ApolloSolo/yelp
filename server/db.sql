-- list database \l

-- Creat database CREATE DATABASE database_name;

-- Connect to database \c database_name

-- View tables \d

-- List table data \d table_name

-- **** To add a table ****

-- CREATE TABLE products (
--     id INT,
--     name VARCHAR(50),
--     price INT,
--     on_sale boolean
-- );

-- **** To ADD and DROP a column to existing table****

-- ALTER TABLE table_name ADD COLUMN new_column_name data_type constraint;
-- ALTER TABLE table_name DROP COLUMN column_name

-- **** To DROP a table****

--DROP TABLE [IF EXISTS] table_name 

-- **** INSERT into table****

INSERT INTO restaurants (name, location, price_range) 
VALUES ('pizza hut', 'west point', 2);

CREATE TABLE restaurants (
     id BIGSERIAL NOT NULL PRIMARY KEY,
     name VARCHAR(50) NOT NULL,
     location VARCHAR(75) NOT NULL,
     price_range INT NOT NULL check(price_range >= 1 and price_range <=5)
 );