DROP DATABASE IF EXISTS favorite_db;

CREATE DATABASE favorite_db;

USE favorite_db;

CREATE TABLE favorite_foods (
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  food VARCHAR(50) NOT NULL,
  score INTEGER(10),
  PRIMARY KEY (id)
);

CREATE TABLE favorite_songs (
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  song VARCHAR(100) NOT NULL,
  artist VARCHAR(50),
  score INTEGER(10),
  PRIMARY KEY (id)
);

CREATE TABLE favorite_movies (
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  movie VARCHAR(100) NOT NULL,
  five_times BOOLEAN DEFAULT false,
  score INTEGER(10),
  PRIMARY KEY (id)
);

SELECT * FROM favorite_foods;
INSERT INTO favorite_foods(food, score)
VALUES("Pizza", 20);

SELECT * FROM favorite_songs;
INSERT INTO favorite_songs(song, artist, score)
VALUES("Hello", "Adele", 45);

SELECT * FROM favorite_movies;
INSERT INTO favorite_movies(movie, five_times, score)
VALUES("Cinderella", true, 15);


-----------------------------------------


-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS animals_db;
-- Creates the "animals_db" database --
CREATE DATABASE animals_db;

-- Makes it so all of the following code will affect animals_db --
USE animals_db;

-- Creates the table "people" within animals_db --
CREATE TABLE people (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  has_pet BOOLEAN NOT NULL,
  -- Makes a sting column called "pet_name" --
  pet_name VARCHAR(30),
  -- Makes an numeric column called "pet_age" --
  pet_age INTEGER(10),
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", true, "Rockington", 100);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", true, "Rockington", 100);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Jacob",true,"Misty",10);

INSERT INTO people (name, has_pet)
VALUES ("Peter", false);

-- Updates the row where the column name is peter --
UPDATE people
SET has_pet = true, pet_name = "Franklin", pet_age = 2
WHERE id = 4;

SELECT * FROM people;

DELETE FROM people
WHERE id = 2;

------------------------------------------


-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --

USE programming_db;

CREATE TABLE programming_languages(
  -- Create a numeric column called "id" which will automatically increment its default value as we create new rows. --
  id INTEGER(10) NOT NULL AUTO_INCREMENT,
  -- Create a string column called "language" --
  language VARCHAR(50),
  -- Create an integer column called "rating" --
  rating INTEGER(10),
  -- Create a boolean column called "mastered" which will automatically fill --
  -- with true when a new row is made and the value isn't otherwise defined. --
  mastered BOOLEAN DEFAULT true,

  -- Set the id as this table's primary key
  PRIMARY KEY (id)
);

-- Create new example rows
SELECT * FROM programming_languages;

INSERT INTO programming_languages(language, rating)
VALUES("HTML", 3);

INSERT INTO programming_languages(language, rating)
VALUES("CSS", 5);

INSERT INTO programming_languages(language, rating)
VALUES("MONGO", 10);

INSERT INTO programming_languages(language, rating)
VALUES("C#", 15);

UPDATE programming_languages
SET mastered = false
WHERE id = 4;

-------------------------------------------------------


DROP DATABASE IF EXISTS books_db;
CREATE DATABASE books_db;
USE books_db;

CREATE TABLE books(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  authorId INTEGER(11),
  title VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE authors(
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName VARCHAR(100),
  lastName VARCHAR(100),
  PRIMARY KEY (id)
);

INSERT INTO authors (firstName, lastName) values ('Jane', 'Austen');
INSERT INTO authors (firstName, lastName) values ('Mark', 'Twain');
INSERT INTO authors (firstName, lastName) values ('Lewis', 'Carroll');
INSERT INTO authors (firstName, lastName) values ('Andre', 'Asselin');

INSERT INTO books (title, authorId) values ('Pride and Prejudice', 1);
INSERT INTO books (title, authorId) values ('Emma', 1);
INSERT INTO books (title, authorId) values ('The Adventures of Tom Sawyer', 2);
INSERT INTO books (title, authorId) values ('Adventures of Huckleberry Finn', 2);
INSERT INTO books (title, authorId) values ('Alice''s Adventures in Wonderland', 3);
INSERT INTO books (title, authorId) values ('Dracula', null);

SELECT * FROM authors;
SELECT * FROM books;

-- show ALL books with authors
-- INNER JOIN will only return all matching values from both tables
SELECT title, firstName, lastName
FROM books
INNER JOIN authors ON books.authorId = authors.id;

-- show ALL books, even if we don't know the author
-- LEFT JOIN returns all of the values from the left table, and the matching ones from the right table
SELECT title, firstName, lastName
FROM books
LEFT JOIN authors ON books.authorId = authors.id;

-- show ALL books, even if we don't know the author
-- RIGHT JOIN returns all of the values from the right table, and the matching ones from the left table
SELECT title, firstName, lastName
FROM books
RIGHT JOIN authors ON books.authorId = authors.id;

----------------------------------------------------------


DROP DATABASE IF EXISTS icecream_db;

CREATE DATABASE icecream_db;

USE icecream_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  flavor VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (flavor, price, quantity)
VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);

SELECT * FROM icecream_db.products;

--------------------------------------------------------------


DROP DATABASE IF EXISTS playlistDB;

CREATE DATABASE playlist_db;

USE playlist_db;

CREATE TABLE playlist (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NOT NULL,
  artist VARCHAR(45) NOT NULL,
  genre VARCHAR(45) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO playlist(title, artist, genre)
VALUES ("Remedy", "Adele", "Soul"), ("Thriller", "Michael Jackson", "Pop"), ("Let Me Go", "HAIM", "Alternative");

SELECT * FROM playlist_db.playlist;

-------------------------------------------------------------


DROP DATABASE IF EXISTS greatbay_db;

CREATE DATABASE greatbay_db;

USE greatbay_db;

CREATE TABLE auctions (
  id INT NOT NULL AUTO_INCREMENT,
  itemName VARCHAR(60) NOT NULL,
  category VARCHAR(45) NOT NULL,
  startingBid INTEGER(10) DEFAULT 0,
  highestBid INTEGER(10) DEFAULT 0,
  PRIMARY KEY(id)
);

INSERT INTO auctions(itemName, category)
VALUES ("Playstation 4", "Games"), ("Encyclopedia", "Education");

SELECT * FROM greatbay_db.auctions;

----------------------------------------------------------------


DROP DATABASE IF EXISTS topsongs_db;

CREATE DATABASE topsongs_db;

USE topsongs_db;

CREATE TABLE top5000 (
  position INT NOT NULL,
  artist VARCHAR(100),
  song VARCHAR(100),
  year INT,
  raw_total DECIMAL(10,4),
  raw_usa DECIMAL(10,4),
  raw_uk DECIMAL(10,4),
  raw_eur DECIMAL(10,4),
  raw_row DECIMAL(10,4),
  PRIMARY KEY (position)
);

SELECT * FROM top5000;


--------------------------------------------------------------------


DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  item_id INT,
  product_name VARCHAR(100),
  department_name VARCHAR(100),
  price DECIMAL(10,2),
  stock_quantity INT,
  product_sales DECIMAL(10,2) DEFAULT 0,
  PRIMARY KEY (item_id)
);

CREATE TABLE departments (
  department_id INT AUTO_INCREMENT NOT NULL,
  department_name VARCHAR(100),
  over_head_costs DECIMAL(18,2),
  total_product_sales DECIMAL(18,2) DEFAULT 0,
  PRIMARY KEY (department_id)
);

INSERT INTO departments (department_name, over_head_costs) values ('apparel', '20000.00');
INSERT INTO departments (department_name, over_head_costs) values ('jewelry', '5000.00');
INSERT INTO departments (department_name, over_head_costs) values ('electronics', '10000.00');
INSERT INTO departments (department_name, over_head_costs) values ('accessories', '60000.00');

SELECT * FROM products;
SELECT * FROM departments;

SELECT department_id, departments.department_name, over_head_costs,
SUM(product_sales) AS total_product_sales
FROM products
INNER JOIN departments ON products.department_name = departments.department_name
GROUP BY department_id;