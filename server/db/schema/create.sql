DROP TABLE IF EXISTS customers CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS restaurants CASCADE;
DROP TABLE IF EXISTS food_items CASCADE;
DROP TABLE IF EXISTS cart_food_lists CASCADE;
DROP TABLE IF EXISTS carts CASCADE;
DROP TABLE IF EXISTS drivers CASCADE;
DROP TABLE IF EXISTS message_threads CASCADE;
DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE customers (
  id SERIAL PRIMARY KEY NOT NULL,
  customer_name VARCHAR(255) NOT NULL,
  customer_email VARCHAR(255) NOT NULL,
  customer_street_address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  postal_code VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  customer_password VARCHAR(255) NOT NULL
  );


CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY NOT NULL,
  restaurant_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  restaurant_street_address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  postal_code VARCHAR(255) NOT NULL,
  phone VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  restaurant_picture VARCHAR(255) NOT NULL
);

CREATE TABLE food_items (
  id SERIAL PRIMARY KEY NOT NULL,
  picture VARCHAR(255) NOT NULL,
  food_name VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL,
  price DECIMAL NOT NULL,
  restaurants_id INTEGER NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE
);

CREATE TABLE food_items_quantities (
  id SERIAL PRIMARY KEY NOT NULL,
  food_items_id INTEGER NOT NULL REFERENCES food_items(id) ON DELETE CASCADE
);

CREATE TABLE cart_food_lists (
  id SERIAL PRIMARY KEY NOT NULL,
  food_items_quantities_id INTEGER NOT NULL REFERENCES food_items_quantities(id) ON DELETE CASCADE
);

CREATE TABLE carts (
  id SERIAL PRIMARY KEY NOT NULL,
  customers_id INTEGER NOT NULL REFERENCES food_items(id) ON DELETE CASCADE,
  cart_food_lists_id INTEGER NOT NULL REFERENCES cart_food_lists(id) ON DELETE CASCADE
);

CREATE TABLE drivers (
  id SERIAL PRIMARY KEY NOT NULL,
  driver_name VARCHAR(255) NOT NULL,
  driver_phone VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY NOT NULL,
  date TIMESTAMP,
  carts_id INTEGER NOT NULL REFERENCES carts(id) ON DELETE CASCADE,
  drivers_id INTEGER NOT NULL REFERENCES drivers(id) ON DELETE CASCADE,
  restaurants_id INTEGER NOT NULL REFERENCES restaurants(id) ON DELETE CASCADE
);

-- //TODO Need to confirm how to setup the FK for the sender ID
CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  customers_id INTEGER REFERENCES customers(id) ON DELETE CASCADE,
  drivers_id INTEGER REFERENCES drivers(id) ON DELETE CASCADE,
  message_text VARCHAR(255) NOT NULL
);

CREATE TABLE message_threads (
  id SERIAL PRIMARY KEY NOT NULL,
  customers_id INTEGER NOT NULL REFERENCES food_items(id) ON DELETE CASCADE,
  drivers_id INTEGER NOT NULL REFERENCES drivers(id) ON DELETE CASCADE,
  orders_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
  messages_id INTEGER NOT NULL REFERENCES messages(id) ON DELETE CASCADE
);

