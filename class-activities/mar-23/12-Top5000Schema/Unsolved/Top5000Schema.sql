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
  raw_row DECIMAL(10,4)
  PRIMARY KEY(position)
);

SELECT * FROM top5000;


