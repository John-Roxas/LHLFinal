-- -- A&W Restaurant Info

INSERT INTO restaurants (restaurant_name, email, restaurant_street_address, city, postal_code, phone, category, restaurant_picture)
VALUES ('McDonalds', 'contact@mcdonalds.com', '7229 Kingsway ', 'Burnaby, BC', 'V5E 1G5', '6047181035', 'Fast food western american burgers', 'https://blog.logomyway.com/wp-content/uploads/2017/01/mcdonalds-logo-1.jpg');

-- -- Mcdonalds food items

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/d8d60149-176f-4715-b70e-1d4b15ce32c5.jpeg', 'Medium Fries', 'McDonalds World Famous Fries® are made with premium potatoes such as the Russet Burbank and the Shepody.', 4.69, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tb-static.uber.com/prod/image-proc/processed_images/c0931923fe5977940e26997d743f7645/5954bcb006b10dbfd0bc160f6370faf3.jpeg', 'Oreo McFlurry', 'The McFlurry consists of whipped, soft serve McDonalds vanilla-flavored ice cream in a cup.', 4.79, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/19daaf93-14df-4e00-b486-73d637ef8423.jpeg', 'Chicken McNuggets', '6 Piece Chicken McNuggets. 100% chicken meat in a deliciously crispy coating, just waiting to be dipped.', 7.09, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/af3b45f8-b943-4778-b903-30e98920ee4b.jpeg', 'Big Mac', 'The McDonalds Big Mac® is a 100% beef burger with a taste like no other.', 7.09, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://d1ralsognjng37.cloudfront.net/4c511292-4752-4234-9b4c-b3b768f72b89.jpeg', 'Double Cheeseburger', 'The Double Cheeseburger features two 100% pure beef patties seasoned with just a pinch of salt and pepper.', 4.99, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tb-static.uber.com/prod/image-proc/processed_images/4ab8af1118d79cef604e18ac12a7e7cf/5954bcb006b10dbfd0bc160f6370faf3.jpeg', 'Junior Chicken', 'Made with 100% grilled chicken, the Junior Chicken is a burger you can always feel good about.', 3.79, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tb-static.uber.com/prod/image-proc/processed_images/06ce4d87df067ab71d2030d79c2dc394/5954bcb006b10dbfd0bc160f6370faf3.jpeg', 'Happy Meal', 'Happy Meal Crispy Chicken Snack Wrap with Small Fries', 5.67, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tb-static.uber.com/prod/image-proc/processed_images/8c84a4182205a7f5823084e972c89012/5954bcb006b10dbfd0bc160f6370faf3.jpeg', 'Chicken & Bacon McWrap', 'Made with 100% Canadian raised seasoned chicken lettuce, tomato, cucumbers, hickory-smoked bacon and mayo-style sauce.', 8.99, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tb-static.uber.com/prod/image-proc/processed_images/add474e9711370531c03155535ed15d8/5954bcb006b10dbfd0bc160f6370faf3.jpeg', 'Premium Roast Coffee', 'Brewed from 100% Arabica beans, flame-roasted for a rich, delicious full-bodied flavour in your choice of regular or decaf.', 2.29, 5);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://tb-static.uber.com/prod/image-proc/processed_images/5806a9bc31e69af258822ba8f8c8716b/5954bcb006b10dbfd0bc160f6370faf3.jpeg', 'McCrispy', 'The McCrispy is a crispy chicken sandwich made with tender and juicy 100% Canadian-raised seasoned chicken.', 7.69, 5);
