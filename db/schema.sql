DROP DATABASE IF EXISTS dummys;

CREATE DATABASE dummys;

USE dummys;

CREATE TABLE products (id VARCHAR(36) PRIMARY KEY, pname VARCHAR(30), img1 TEXT, img2 TEXT, img3 TEXT, img4 TEXT, ratings INT, average TEXT, recommended INT, item INT, model INT, did INT);
