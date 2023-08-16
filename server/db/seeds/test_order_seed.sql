
-- INSERT INTO carts (customers_id, closed) VALUES
-- (2, TRUE),
-- (2, TRUE);

-- INSERT INTO cart_items (cart_id, food_item_id, quantity, food_item_price, food_name) VALUES
-- (1, 1, 2, 10.99, 'Burger'),
-- (1, 3, 1, 6.49, 'Fries'),
-- (1, 2, 3, 8.99, 'Pizza'),
-- (1, 4, 2, 3.99, 'Soda');

-- INSERT INTO cart_items (cart_id, food_item_id, quantity, food_item_price, food_name) VALUES
-- (2, 1, 2, 10.99, 'Burger'),
-- (2, 3, 1, 6.49, 'Fries'),
-- (2, 2, 3, 8.99, 'Pizza'),
-- (2, 4, 2, 3.99, 'Soda');

INSERT INTO orders (cart_id, date, customers_id, drivers_id, restaurants_id, status, total_amount) VALUES
(1, '2023-07-03 12:30:00', 2, 1, 1, 'Delivered', 28.46),
(1, '2023-07-02 18:45:00', 2, NULL, 2, 'Completed', 27.06),
(1, '2023-07-02 18:45:00', 2, NULL, 3, 'Completed', 14.31),
(1, '2023-07-02 18:45:00', 2, NULL, 4, 'Completed', 30.91);


