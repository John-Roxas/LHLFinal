-- -- New Mandarin Seafood Restaurant Info --

INSERT INTO restaurants (restaurant_name, email, restaurant_street_address, city, postal_code, phone, category, restaurant_picture)
VALUES ('New Mandarin', 'info@newmandarin.com', '2206 Kingsway', 'Vancouver, BC', 'V5N 2T7', '6043369388', 'Chinese food dim sum seafood', 'https://newmandarin.ca/wp-content/uploads/2020/10/site_logo.png');

-- -- New Mandarin Seafood Restaurant food items

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://newmandarin.ca/wp-content/uploads/2020/10/AI_Image4-104x104.jpeg', 'Steamed Dace Fish Shao Mai
', 'Steamed open-face stemmed dumplings filled with fish dace.', 8.98, 4);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://newmandarin.ca/wp-content/uploads/2020/10/AI_Image3-104x104.jpeg', 'Steam Crab Meat and Minced Pork Dumpling', 'Our seafood-special spin on the famous Xiao Long Bao.', 9.38, 4);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://newmandarin.ca/wp-content/uploads/2020/10/AI_Image5-e1603666236767-104x104.jpeg', 'Steamed Spareribs with Chinese Wampee Sauce', 'Spare ribs steamed with a special wampee, chili, garlic, cardamom, lemongrass and ginger sauce.', 8.98, 4);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://newmandarin.ca/wp-content/uploads/2020/10/AI_Image-e1603666151205-104x104.jpeg', 'Shrimp & Pork Dumpling in Spicy Sauce & Pork', 'Shrimp and pork rolled in a delicate dumpling skin, steamed with a spicy soy sauce broth.', 9.38, 4);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://newmandarin.ca/wp-content/uploads/2020/10/AI_Image2-e1603666449317-104x104.jpeg', 'Steamed Egg Yolk Buns QQ Style
', 'Soft steamed milk buns filled with a runny yolk custard.', 9.38, 4);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://newmandarin.ca/wp-content/uploads/2020/10/AI_Image6-1-104x104.jpeg', 'Deep-Fried Minced Shrimp With Smoked Salmon Rolls
', 'Smoked salmon mixed with a minced shrimp paste, deep fried to perfection in a whispy, crispy coat.', 9.38, 4);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://newmandarin.ca/wp-content/uploads/2020/10/AI_Image-1-104x104.jpeg', 'Deep-Fried Shrimp Pickled Ginger& Aged Egg', 'Deep fried fresh Pacific shrimp, served with pickled ginger and traditional Chinese Century Egg.', 9.38, 4);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://newmandarin.ca/wp-content/uploads/2020/10/AI_Image4-1-104x104.jpeg', 'Pan-Fried Dace Paste with Pepper
', 'Green pepper halves stuffed with fish dace, pan-fried to a crispy exterior, with a soft chewy interior.', 9.38, 4);