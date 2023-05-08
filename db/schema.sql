DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name TEXT );

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title TEXT,
    salary INT,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id));

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    role_id INT,
    manager_id INT REFERENCES employee(id),
    FOREIGN KEY (role_id)
    REFERENCES roles(id));