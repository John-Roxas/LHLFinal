-- -- A&W Restaurant Info

INSERT INTO restaurants (restaurant_name, email, restaurant_street_address, city, postal_code, phone, category, restaurant_picture)
VALUES ('Sushi Garden', 'contact@sushiG.com', '6611 Kingsway ', 'Burnaby, BC', 'V5E 1E2', '6047181035', 'Japanese Sushi asian', 'https://d1ralsognjng37.cloudfront.net/5d6d9e02-ef50-4274-803c-19186ec180f0.jpeg');

-- -- Sushi Garden food items

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/c70ef553-1a9e-41dc-8bb2-f3a9be7a48cd.jpeg', 'Seafood Salad', 'Served with noodle, Ebi, smoked salmon, masago, crab meat, tako, and wasabi mayo sauce on top.', 13.05, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/8eec7859-31bc-4416-a999-9e6081ff535a.jpeg', 'Gyoza', 'Pork and veggies.', 8.75, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/736fe567-877f-4756-9e0f-ac5d62487d29.jpeg', 'Spider Roll', 'Softshell crab, cucumber, avocado, mayo, and fish roe with tonkatsu sauce.', 12.95, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/22ddc07f-a39f-40de-80ad-1fe67622dbea.jpeg', 'Rainbow Roll', 'Tamago, cucumber, mayo, different raw fish-tuna, salmon, Ebi, hooligan, taco, and Tai.', 12.05, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/c52a8879-2067-4b93-9bbb-424fcfe390c7.jpeg', 'Wild Salmon Sushi', 'Japanese dish that showcases the natural flavors of fresh, wild-caught salmon in a simple yet sophisticated presentation. ', 3.85, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/b322551f-6ccb-493f-aba9-cbe1d8da5181.jpeg', 'Spicy Salmon Sashimi', 'Vibrant Japanese dish that tantalizes the taste buds with its fresh flavors and fiery kick.', 13.79, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/aaf63293-ca3e-4831-8e37-2353ca5c4e19.jpeg', 'DX Assorted Sashimi', 'Japanese culinary offering that showcases an exquisite array of raw seafood.', 53.47, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/e41c2b73-8522-472a-9ba5-e6d9441b58cf.jpeg', 'Assorted Tempura', 'One-piece carrot, two pieces zucchini, yam, and three pieces prawn.', 15.89, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/05480e4b-dcf6-4383-977e-2aa038018203.jpeg', 'Spicy Chopped Scallop Cone', 'Served with cucumber and spicy sauce. Cone sushi.', 7.55, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/d75a090c-b4e6-4718-a6b6-d98b078e1c50.jpeg', 'Unagi Don Rice Bowl', 'Delicious combination of grilled freshwater eel (unagi) served over a bed of steamed white rice.', 23.50, 6);
