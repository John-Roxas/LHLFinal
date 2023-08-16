-- -- SOODA Restaurant Info

INSERT INTO restaurants (restaurant_name, email, restaurant_street_address, city, postal_code, phone, category, restaurant_picture)
VALUES ('Sooda Korean BBQ', 'soodabrentwood@gmail.com', '4455 Lougheed Hwy', 'Burnaby, BC', 'V5C 3Z2', '6044289227', 'Korean Barbeque', 'https://static.wixstatic.com/media/c2a506_795f00ddced44f5f8a8d221a3e9abe9a~mv2.png/v1/fill/w_163,h_175,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c2a506_795f00ddced44f5f8a8d221a3e9abe9a~mv2.png');

-- -- SOODA food items

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://static.wixstatic.com/media/c2a506_59a7dabdf62740f7a3d46f0e41135b06~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.jpg', 'Sooda Dakgalbi', 'Chicken marinated in spicy sauce Served on a hot plate with cheese, green onions, eggroll, corn and rice.', 43.99, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://static.wixstatic.com/media/c2a506_f666745c15fa4891a4a12c3cf195b449~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.jpg', 'Sooda Jeyook', 'Pork marinated in spicy sauce Served on a hot plate with cheese, green onions, eggroll, corn and rice.', 43.99, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://static.wixstatic.com/media/c2a506_dc6c1e96f7c14cefab91b4d031aec5fa~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.jpg', 'Kong Bul', 'Thinly sliced pork belly with bunch of soy bean sprout in home in home made spicy sauce', 37.99, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://static.wixstatic.com/media/c2a506_a52d41d84d0849d793fe17b8a4298ee0~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.jpg', 'Sooda Box', '46 cm of premium Korean steak tartar torched on top of rice half cook.', 29.99, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://static.wixstatic.com/media/c2a506_f9c3ad1b49fd447da5a201dc66c0e093~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.jpg', 'Honey Garlic Sooda Box', '46 cm of premium Korean steak tartar torched on top of rice with homemade garlic sauce and roasted garlic.', 29.99, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://static.wixstatic.com/media/c2a506_d79c18fe7d8d446e971700be240b42ea~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.jpg', 'Cheese Sooda Box', '46 cm of premium Korean steak tartar torched on top of rice with mozzarella.', 31.99, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://static.wixstatic.com/media/c2a506_9f6eb22dd53c499391cc11a73a9bc876~mv2.png/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.png', 'Chicken Bek Sook', 'Steamed chicken soup with crispy rice. 1 day prior booking required.', 52.99, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://static.wixstatic.com/media/c2a506_4f240783fac34a1789c84c9aaefd6023~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.jpg', 'Sweet Pork Rib With Mozza', 'Pork back ribs with sweet soy sauce served with mozzarella cheese. Garlic, sesame seeds, black pepper', 25.99, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://static.wixstatic.com/media/c2a506_3b9a5576a59646d5a7e21e1407daed80~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.jpg', 'Japchae', 'Stir pan-fried potato noodles with beef, mushrooms and various vegetable. Sesame seeds and sesame oil.', 21.99, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://static.wixstatic.com/media/c2a506_088cfc1b75f747a09fe3b95cd639dfd3~mv2.jpg/v1/fill/w_232,h_232,usm_1.20_1.00_0.01/file.jpg', 'Bulgogi
', 'Beef marinated in bulgogi sauce/single dish', 13.99, 5);
