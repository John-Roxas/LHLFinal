-- Popeyes Restaurant Info

INSERT INTO restaurants (restaurant_name, email, restaurant_street_address, city, postal_code, phone, category, restaurant_picture)
VALUES ('Popeyes', 'info@popeyes.com', '2170 Hawkins Street, BC', 'Port Coquitlam, BC', 'V3B 0G6', '17789413681', 'Fast Food', 'https://1000logos.net/wp-content/uploads/2021/04/Popeyes-logo.png');

-- Popeyes Food Items

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://cdn.sanity.io/images/czqk28jt/prod_plk_ca/5f61e30468fa8cacf654bb972946b0c27f5f3448-750x500.png?w=275&q=80&fit=max&auto=format', 'Classic Spicy Chicken Sandwich', 'Crispy chicken fillet with spicy seasoning', 5.99, 9);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://cdn.sanity.io/images/czqk28jt/prod_plk_ca/288eddafb75fc45bc42ac4528ea7fadba7d75f37-1000x1000.png?w=275&q=80&fit=max&auto=format', 'Classic Blackened Chicken Sandwich', 'Blackened fillet on a brioche bun', 7.49, 9);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://cdn.sanity.io/images/czqk28jt/prod_plk_ca/e4d923e893217e37cdf8907ef90bd007781f1c26-1000x1000.png?w=275&q=80&fit=max&auto=format', 'Classic Crispy Chicken Wrap', '2 Mild Crispy Tenders in a soft tortilla', 6.99, 9);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://cdn.sanity.io/images/czqk28jt/prod_plk_ca/463c3f9c8fb8bdad98aad1c2b2eb7042beb0c5c0-1200x675.jpg?w=275&q=80&fit=max&auto=format', 'Cajun Fries', 'Seasoned fries with a kick of Cajun spices.', 2.99, 9);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://cdn.sanity.io/images/czqk28jt/prod_plk_ca/3785184073fb621477692ba0e99484321ad1dd27-1200x675.jpg?w=275&q=80&fit=max&auto=format', 'Red Beans & Rice', 'Slow-cooked red beans with seasoned rice.', 3.49, 9);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://cdn.sanity.io/images/czqk28jt/prod_plk_ca/e7e09e887669285c06802efcb2b8f27677d85aa9-1200x675.jpg?w=275&q=80&fit=max&auto=format', 'Onion Rings', 'Breaded and fried onion rings with a bold Cajun flavor.', 4.99, 9);

INSERT INTO food_items (picture, food_name, description, price, restaurants_id)
VALUES ('https://cdn.sanity.io/images/czqk28jt/prod_plk_ca/4edad04894911cbfbfab6772db457507d228f155-1200x675.jpg?w=275&q=80&fit=max&auto=format', 'Biscuits', 'Flaky and buttery biscuits, a perfect side for any meal.', 1.50, 9);
