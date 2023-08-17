-- -- A&W Restaurant Info

INSERT INTO restaurants (restaurant_name, email, restaurant_street_address, city, postal_code, phone, category, restaurant_picture)
VALUES ('A&W', 'contact@aw.com', '6535 Kingsway', 'Burnaby, BC', 'V5E 1E1', '6045223723', 'Fast food american western burgers', 'https://logodix.com/logo/432556.png');

-- -- A&W food items

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=papa-burger&d=papa-burger&cat=burgers&lang=papa-burger-en', 'Papa Burger', '1/3 lb beef burger with two strips of bacon, American cheese, lettuce, tomato, onions, pickles, and A&W Papa Sauce.', 6.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=teen-burger&d=teen-burger&cat=burgers&lang=teen-burger-en', 'Teen Burger', '1/4 lb beef burger with bacon, American cheese, lettuce, tomato, onions, pickles, and Teen Sauce.', 5.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=beyond-meat-burger&d=beyond-meat-burger&cat=burgers&lang=beyond-meat-burger-en', 'Beyond Meat Burger', 'A plant-based Beyond Meat burger with lettuce, tomato, onions, pickles, ketchup, and mustard.', 7.49, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=chubby-chicken-burger&d=chubby-chicken-burger&cat=chicken&lang=chubby-chicken-burger-en', 'Crispy Chicken Burger', 'A crispy chicken burger with lettuce, tomato, and creamy mayo.', 5.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=spicy-chipotle-chicken-wrap&d=spicy-chipotle-chicken-wrap&cat=chicken&lang=spicy-chipotle-chicken-wrap-en', 'Spicy Chipotle Chicken Wrap', 'A flavorful combination of crispy chicken strips, chipotle mayo, lettuce, tomato, and cheese wrapped in a soft tortilla.', 6.49, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=poutine&d=poutine&cat=sides&lang=poutine-en', 'Poutine', 'A Canadian classic featuring crispy french fries topped with cheese curds and smothered in rich gravy for a savory and indulgent experience.', 4.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=ringer-burger&d=ringer-burger&cat=burgers&lang=ringer-burger-en', 'Ringer Burger', 'Our most loaded burger ever, with onion rings, beef patty, BBQ sauce, bacon and provolone cheese, red onion, lettuce, tomato and pickle.', 9.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=cheddar-bacon-uncle-burger&d=cheddar-bacon-uncle-burger&cat=burgers&lang=cheddar-bacon-uncle-burger-en', 'Cheddar Bacon Uncle Burger', '5 oz grass-fed beef burger with real cheddar cheese, bacon, red onion, crisp lettuce, pickles and tomato.', 12.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=buddy-burger&d=buddy-burger&cat=burgers&lang=buddy-burger-en', 'Buddy Burger', '1.6 oz beef patty burger with grilled onions, ketchup, mustard and Teen® sauce.', 5.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=buddy-burger&d=buddy-burger&cat=burgers&lang=buddy-burger-en', 'Mozza Burger', 'Beef patty burger with real mozzarella cheese, bacon, lettuce, tomato and Mozza® sauce.', 13.99, 1);
