-- -- Burger King Restaurant Info

INSERT INTO restaurants (restaurant_name, email, restaurant_street_address, city, postal_code, phone, category, restaurant_picture)
VALUES ('Burger King', 'theking@burgerking.com', '4820 Kingsway', 'Burnaby, BC', 'V5H 4P1', '6044335181', 'Fast food american western burgers', 'https://s1.stabroeknews.com/images/2017/10/burgerking.jpg');

-- -- Burger King food items

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/yc49xfhy', 'Whopper', 'Flame-grilled beef patty, sesame bun, lettuce, tomato, pickles, onions.', 6.99, 2);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/2p82uar5', 'Double Whopper', 'Two flame-grilled beef patties, sesame bun, lettuce, tomato, pickles, onions.', 8.49, 2);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/n6xvx64n', 'Bacon King', 'Burger with bacon, beef patty, cheese, sesame bun, lettuce, tomato.', 7.49, 2);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/4e4tj6fa', 'Crispy Butter Chicken Sandwich', 'Butter chicken with crispy coating in a sandwich with accompaniments.', 5.99, 2);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/z3ymfa6x', '8pc Chicken Nuggets', 'Eight pieces of crispy and flavorful chicken nuggets.', 4.99, 2);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/2jmkt482', 'Onion Rings', 'Crispy golden rings made from battered and fried onions.', 3.99, 2);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/yc2fek7j', 'Coca-Cola', 'Iconic carbonated soft drink known for its refreshing and fizzy taste.', 1.50, 2);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/yckxan5b', 'Sprite', 'Lively and refreshing lemon-lime flavored carbonated soft drink.', 1.50, 2);

