CREATE DATABASE chirpy_db;
USE chirpy_db;

CREATE TABLE `chirps` (

  -- TABLE CODE TO GO HERE
  id INT(11) AUTO_INCREMENT,
  author VARCHAR(255) NOT NULL,
  chirp VARCHAR(255) NOT NULL,
  time_created DATETIME,
  PRIMARY KEY (id)
);