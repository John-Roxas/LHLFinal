-- -- Shake Shack Restaurant Info

INSERT INTO restaurants (restaurant_name, email, restaurant_street_address, city, postal_code, phone, category, restaurant_picture)
VALUES ('Shake Shack', 'shakeshack@burgers.com', '4820 Kingsway', 'Burnaby, BC', 'V5H 4P1', '6044335181', 'Fast food', 'https://tinyurl.com/2hpjfref');

-- -- Shake Shack food items

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/4hu8jyun', 'Smoke Shack', 'Angus beef cheeseburger with applewood-smoked bacon.', 6.99, 8);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/basda3wb', 'Veggie Shack', 'Our veggie burger packed with mushrooms and sweet potatoes.', 8.49, 8);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/2ucmpvsr', 'Shack Burger', 'Angus beef cheeseburger with lettuce and tomato.', 7.49, 8);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/ycyyepf8', 'Shroom Burger', 'Crisp-fried portobello mushroom filled with cheese.', 6.99, 8);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/4snb2jsw', 'Shack Stack', 'Angus beef cheeseburger topped with a Shroom Burger with lettuce.', 8.99, 8);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/yx5ar5wy', 'Chicken Shack', 'Crispy, white-meat chicken breast over lettuce and pickles.', 5.99, 8);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/4uhkct36', 'Chicken Bites', 'Crispy, whole white-meat bites served with honey mustard or BBQ sauce.', 5.99, 8);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/b3x93dpv', 'Fries', 'Crispy crinkle cut fries (contains soy).', 3.99, 8);

