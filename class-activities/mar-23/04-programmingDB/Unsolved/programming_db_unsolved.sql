-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS programming_db;
-- Create a database called programming_db --
CREATE DATABASE programming_db;

-- Use programming db for the following statements --

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

USE programming_db;

-- Create new example rows
SELECT * FROM programming_languages;
INSERT INTO programming_languages(language, rating, mastered)
VALUES("HTML", 3, true);

SELECT * FROM programming_languages;
INSERT INTO programming_languages(language, rating, mastered)
VALUES("CSS", 5, true);