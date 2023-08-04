
INSERT INTO carts (id, customers_id, closed) VALUES
(1, 2, FALSE),
(2, 2, TRUE);

INSERT INTO cart_items (id, cart_id, food_item_id, quantity, food_item_price, food_name) VALUES
(1, 1, 1, 2, 10.99, 'Burger'),
(2, 1, 3, 1, 6.49, 'Fries'),
(3, 1, 2, 3, 8.99, 'Pizza'),
(4, 1, 4, 2, 3.99, 'Soda');

INSERT INTO orders (id, cart_id, date, customers_id, drivers_id, restaurants_id, status, total_amount) VALUES
(1, 1, '2023-07-03 12:30:00', 2, 1, 1, 'Delivered', 28.46),
(2, 2, '2023-07-02 18:45:00', 2, NULL, 2, 'Completed', 36.45);
