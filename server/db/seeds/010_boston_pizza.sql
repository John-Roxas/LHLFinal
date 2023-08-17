-- Boston Pizza Restaurant Info

INSERT INTO restaurants (restaurant_name, email, restaurant_street_address, city, postal_code, phone, category, restaurant_picture)
VALUES ('Boston Pizza', 'info@bostonpizza.com', '2325 Ottawa Street', 'Port Coquitlam', 'V3B 8A4', '778-285-2200', 'Pizza', 'https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Boston_Pizza.svg/1200px-Boston_Pizza.svg.png');

-- Boston Pizza Food Items

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://bp-ca-cdn.tillster.com/menu-images/prod/a70db439-87ae-4a7b-8fa2-dae175415530.png', 'Pepperoni Pizza', 'Classic pizza topped with delicious pepperoni slices.', 12.99, 10);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://bp-ca-cdn.tillster.com/menu-images/prod/9a19a6e7-c54c-4cdf-ae86-1e4b887add3b.png', 'Hawaiian Pizza', 'Pizza topped with ham, pineapple, and mozzarella cheese.', 13.49, 10);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://bp-ca-cdn.tillster.com/menu-images/prod/9fa5d521-2d7b-49b4-91d2-8ff1419ace96.png', 'BBQ Chicken Pizza', 'Grilled chicken, red onions, and BBQ sauce on a pizza.', 14.99, 10);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://bp-ca-cdn.tillster.com/menu-images/prod/e6b5bba1-a752-494e-9583-b168f1b3642a.png', 'Spaghetti Bolognese', 'Classic spaghetti with meaty tomato sauce.', 10.99, 10);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://bp-ca-cdn.tillster.com/menu-images/prod/b03d8dcc-b5c8-4d9c-8189-ddd3608c2bc9.png', 'Garlic Bread', 'Toasted garlic bread with a buttery finish.', 4.99, 10);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://bp-ca-cdn.tillster.com/menu-images/prod/6e7f5474-e08d-4650-bb67-9f1c106b45f3.png', 'Caesar Salad', 'Romaine lettuce, croutons, and Caesar dressing.', 8.49, 10);
