-- -- A&W Restaurant Info

INSERT INTO restaurants (restaurant_name, email, restaurant_street_address, city, postal_code, phone, category)
VALUES ('A&W', 'contact@aw.com', '610 6th St ', 'New Westminster, BC', 'V3L 3C2', '6045223723', 'Fast food');

-- -- A&W food items

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=papa-burger&d=papa-burger&cat=burgers&lang=papa-burger-en', 'Papa Burger', 'A juicy 1/3 lb beef patty with two strips of bacon, American cheese, lettuce, tomato, onions, pickles, and A&W Papa Sauce, served on a toasted sesame seed bun.', 6.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=teen-burger&d=teen-burger&cat=burgers&lang=teen-burger-en', 'Teen Burger', 'A delicious 1/4 lb beef patty topped with bacon, processed cheddar cheese, lettuce, tomato, onions, pickles, and Teen Sauce, served on a toasted sesame seed bun.', 5.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=beyond-meat-burger&d=beyond-meat-burger&cat=burgers&lang=beyond-meat-burger-en', 'Beyond Meat Burger', 'A plant-based Beyond Meat patty topped with lettuce, tomato, onions, pickles, ketchup, and mustard, served on a toasted sesame seed bun.', 7.49, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=chubby-chicken-burger&d=chubby-chicken-burger&cat=chicken&lang=chubby-chicken-burger-en', 'Crispy Chicken Burger', 'A crispy chicken patty topped with lettuce, tomato, and creamy mayo, served on a toasted sesame seed bun.', 5.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=spicy-chipotle-chicken-wrap&d=spicy-chipotle-chicken-wrap&cat=chicken&lang=spicy-chipotle-chicken-wrap-en', 'Spicy Chipotle Chicken Wrap', 'A flavorful combination of crispy chicken strips, chipotle mayo, lettuce, tomato, and cheese wrapped in a soft tortilla.', 6.49, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=poutine&d=poutine&cat=sides&lang=poutine-en', 'Poutine', 'A Canadian classic featuring crispy french fries topped with cheese curds and smothered in rich gravy for a savory and indulgent experience.', 4.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=ringer-burger&d=ringer-burger&cat=burgers&lang=ringer-burger-en', 'Ringer Burger', 'Our most loaded burger ever, with crispy onion rings, a juicy grass-fed beef patty, smoky BBQ sauce, bacon and provolone cheese, as well as fresh red onion, lettuce, tomato and pickle. Step up to the plate before it’s gone.', 9.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=cheddar-bacon-uncle-burger&d=cheddar-bacon-uncle-burger&cat=burgers&lang=cheddar-bacon-uncle-burger-en', 'Cheddar Bacon Uncle Burger', 'A perfectly seasoned 5 oz grass-fed beef patty topped with real cheddar cheese, mouth-watering bacon from pork raised without the use of antibiotics, red onion, crisp lettuce, pickles and a tomato, served on a freshly toasted sesame seed bun.', 12.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=buddy-burger&d=buddy-burger&cat=burgers&lang=buddy-burger-en', 'Buddy Burger', 'A perfectly seasoned 1.6 oz grass-fed beef patty topped with freshly grilled onions, ketchup, mustard and Teen® sauce, served on a freshly toasted bun.', 5.99, 1);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://web.aw.ca/i/items/?i=buddy-burger&d=buddy-burger&cat=burgers&lang=buddy-burger-en', 'Mozza Burger', 'A perfectly seasoned grass-fed beef patty topped with real mozzarella cheese, mouth-watering bacon from pork raised without the use of antibiotics, crisp lettuce, tomato and Mozza® sauce, served on a freshly toasted sesame seed bun.', 13.99, 1);
