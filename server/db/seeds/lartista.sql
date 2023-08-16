-- -- Antons Restaurant Info

INSERT INTO restaurants (restaurant_name, email, restaurant_street_address, city, postal_code, phone, category, restaurant_picture)
VALUES ("L'Artista", 'lartista@telus.net', '3891 E Hastings St', 'Burnaby, BC', 'V5C 2H7', '604299', 'Italian Pasta', 'https://lh3.googleusercontent.com/p/AF1QipOknzX9ZCwkWEn_PxPv5bbkgww7ZKtpAweil97x=w960-h960-n-o-v1');

-- -- Antons food items

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/ffa23077-609c-4147-a2c1-78972dfc4bd9-retina-large-jpeg', 'Handmade Gnocchi', 'POtato dumplings served with your choice of sauce: meat, tomato rose or pesto', 22.95, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/abb99fa7-d20f-4a33-acd4-e17d9be5a782-retina-large-jpeg', 'Lasagna Di Casa', 'Layers of fresh pasta with meat sauce, cream, parmesan and mozzarella cheese.', 22.95, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/ab011524-7535-4ad7-af5f-d82b14851b78-retina-large-jpeg', 'Spaghetti Alla Carbonara', 'Spaghetti with prosciutto, fresh egg mixed with parmesan cheese and cream', 22.95, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/ff7fa82e-4e3c-499e-87d8-36675abbd5f8-retina-large-jpeg', 'Chicken Parmigiana', 'Breaded baked chicken breast topped with mozzarella cheese and tomato sauce, served with vegetables and potatoes.', 25.95, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/f97ad49d-bfee-41d8-91ee-2298f9dbbf74-retina-large-jpeg', 'Linguine Alle Vongole', 'Linguine, fresh clams, garlic, white wine and olive oil.', 23.95, 6);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://img.cdn4dd.com/p/fit=cover,width=150,height=150,format=auto,quality=50/media/photos/abb99fa7-d20f-4a33-acd4-e17d9be5a782-retina-large-jpeg', 'Veal Parmigiana', 'Breaded veal cutlet baked with fresh homemade tomato sauce, mozzarella & parmigiano cheese.', 27.95, 6);
