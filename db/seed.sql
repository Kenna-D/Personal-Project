DROP TABLE IF EXISTS love_your_shelf_users;
DROP TABLE IF EXISTS love_your_shelf_ordered_products;
DROP TABLE IF EXISTS love_your_shelf_products;

CREATE TABLE love_your_shelf_users (
  user_id SERIAL PRIMARY KEY,
  username VARCHAR(250),
  hash VARCHAR(250),
  phone_number VARCHAR(12),
  email VARCHAR(150),
  is_admin BOOLEAN
);

CREATE TABLE love_your_shelf_products(
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    group_id INTEGER,
    image TEXT,
    price VARCHAR(50),
    details TEXT
);

CREATE TABLE love_your_shelf_ordered_products (
    ordered_products_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES love_your_shelf_users(user_id),
    product_id INTEGER REFERENCES love_your_shelf_products(product_id),
    color VARCHAR(25),
    delivery_or_pickup VARCHAR(50),
    custom_details TEXT
);