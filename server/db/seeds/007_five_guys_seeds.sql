-- -- Five Guys Info --

INSERT INTO restaurants (restaurant_name, email, restaurant_street_address, city, postal_code, phone, category, restaurant_picture)
VALUES ('Five Guys', 'fiveguys@foods.ca', '2206 Kingsway', 'Vancouver, BC', 'V5N 2T7', '6043369388', 'Fast food american western burgers', 'https://dynl.mktgcdn.com/p/WNW7_ucUueE-eG1oDnOI8peBG2B_MrVoBTBztf2D5pU/196x196.png');

-- -- Five Guys food items

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/5n8t7pf5', 'Hamburger', 'Fresh, hand-formed patties hot off the grill.', 7.98, 7);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/y5rzvdkx', 'Cheese Burger', 'American-style cheese melted between fresh patties.', 8.38, 7);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/38aeyvkj', 'Bacon Burger', 'Hand-formed patties hot off the grill, layered with strips of crispy apple-wood smoked bacon.', 8.98, 7);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/yh32z4j7', 'Bacon Cheese Burger', 'Fresh patties hot off the grill with American- style cheese and crispy apple-wood smoked bacon.', 9.38, 7);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/35n67ynt', 'Hot Dog', 'All-beef hot dog, split and grilled lengthwise for a caramelized exterior.', 6.38, 7);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/55msu23v', 'Cheese Dog', 'All-beef hot dog, split and grilled lengthwise for a caramelized exterior.', 6.38, 7);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/22fhzk3t', 'Five Guys Style Fries', 'Freshly made boardwalk-style fries, cooked in pure, cholesterol-free, 100% peanut oil.', 5.38, 7);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tinyurl.com/2nwpk5fb', 'Poutine', 'Canada’s traditional gravy and cheese curds added to our freshly made boardwalk-style fries.', 6.38, 7);
