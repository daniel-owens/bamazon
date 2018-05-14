DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL, 
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Soap", "Home Care", 5, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothpaste", "Home Care", 5, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toilet Paper", "Home Care", 6, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Paper Towels", "Home Care", 8, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Socks", "Clothing", 10, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Underwear", "Clothing", 25, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Hoodie", "Clothing", 50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mac Charger", "Appliances", 80, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ear Buds", "Appliances", 50, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Phone Charger", "Appliances", 40, 100);

SELECT * FROM products;











