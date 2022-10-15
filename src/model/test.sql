CREATE TABLE categories(
    category_id BIGSERIAL NOT NULL PRIMARY KEY,
    category_name VARCHAR(64) NOT NULL,
    category_img TEXT NOT NULL
);

INSERT INTO categories(category_name, category_img) VALUES('Milliy taomlar', 'https://xabar.uz/static/crop/1/5/920__95_155322907.jpg');
INSERT INTO categories(category_name, category_img) VALUES('Fast food', 'https://image.shutterstock.com/shutterstock/photos/602505563/display_1500/stock-vector-illustration-of-delicious-tasty-fast-food-and-drink-item-602505563.jpg');

CREATE TABLE shops(
    shop_id BIGSERIAL NOT NULL PRIMARY KEY,
    shop_name VARCHAR(64) NOT NULL,
    shop_img TEXT NOT NULL,
    category_id INT NOT NULL,
        FOREIGN KEY(category_id)
        REFERENCES categories(category_id)
        ON DELETE CASCADE
);

INSERT INTO shops(shop_name, shop_img, category_id) VALUES('Milliy taomlar', 'https://apollo-olx.cdnvideo.ru/v1/files/g7igm7992wmh-UZ/image;s=1280x957', 1);
INSERT INTO shops(shop_name, shop_img, category_id) VALUES('G`ijdivon oshxonasi', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbSLPsUWfghKUfFSWxHM_Hlals7luXeR7EpQ&usqp=CAU', 1);
INSERT INTO shops(shop_name, shop_img, category_id) VALUES('Evos', 'https://dostavkainfo.uz/wp-content/uploads/2020/03/evos.png', 2);
INSERT INTO shops(shop_name, shop_img, category_id) VALUES('Oq tepa lavash', 'https://i.ibb.co/5xNQMSM/Bot-logo.png', 2);

CREATE TABLE foods(
    food_id BIGSERIAL NOT NULL PRIMARY KEY,
    food_name VARCHAR(64) NOT NULL,
    food_img TEXT NOT NULL,
    food_price INT NOT NULL,
    shop_id INT NOT NULL,
        FOREIGN KEY(shop_id)
        REFERENCES shops(shop_id)
        ON DELETE CASCADE
);

INSERT INTO foods(food_name, food_img, food_price, shop_id) VALUES('Manti', 'https://i0.wp.com/fartyk.ru/wp-content/uploads/2020/07/mantiy.jpg', 8000, 1);
INSERT INTO foods(food_name, food_img, food_price, shop_id) VALUES('Chuchvara', 'https://plovnaya1.com/thumb/2/gJq-e1KkFh9dQ6474HR_1A/r/d/sup_chuchvara.jpg', 30000, 1);
INSERT INTO foods(food_name, food_img, food_price, shop_id) VALUES('Osh', '1https://avatars.mds.yandex.net/get-altay/5965316/2a0000017fe6b9008efe39e78aed345d089c/XXL', 25000, 1);
INSERT INTO foods(food_name, food_img, food_price, shop_id) VALUES('Shashlik', 'https://avatars.mds.yandex.net/get-altay/1938795/2a0000017693219d526f5ac3da77aa61601a/XXL', 22000, 2);
INSERT INTO foods(food_name, food_img, food_price, shop_id) VALUES('Somsa', 'https://fastly.4sqi.net/img/general/600x600/74992663_XiMzOFut9lb29Qk0ZCVNDqrgWdBmzdO4gXyBb4dO-Ik.jpg', 15000, 2);
INSERT INTO foods(food_name, food_img, food_price, shop_id) VALUES('Lavash', 'https://www.pasta.uz/upload/products/Evos%20Combo.jpg', 31000, 3);
INSERT INTO foods(food_name, food_img, food_price, shop_id) VALUES('Klab', 'https://cdn.fishandbread.com/products/3_1635154814.jpg', 25000, 3);
INSERT INTO foods(food_name, food_img, food_price, shop_id) VALUES('Pitsa assarti', 'https://yukber.uz/image/cache/catalog/photo_2022-02-17_17-06-53-600x600.jpg', 72000, 3);
INSERT INTO foods(food_name, food_img, food_price, shop_id) VALUES('Lavash', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UkPulUCgeYZF-3Eo3sO_0WxWOTC3RDhP2Q&usqp=CAU', 27000, 4);
INSERT INTO foods(food_name, food_img, food_price, shop_id) VALUES('Pitsa qo`ziqorinli', 'https://api.choparpizza.uz/storage/products/2022/03/03/fIyDBwVdiETji98csIkVA8lrWIrrKSYvhwXgblx9.webp', 67000, 4);
INSERT INTO foods(food_name, food_img, food_price, shop_id) VALUES('Pitsa pishloqli', 'http://timefood.uz/images/prod-pizza-cheese.png', 65000, 4);

CREATE TABLE orders(
    order_id BIGSERIAL NOT NULL PRIMARY KEY,
    order_client_full_name VARCHAR(256) NOT NULL,
    order_client_number VARCHAR(16),
    order_client_address TEXT NOT NULL,
    order_products TEXT NOT NULL,
    order_time timestamptz DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
    orders(order_client_full_name, order_client_number, order_client_address, order_products)
VALUES('Mashrab', '+998901234567', 'Qashqadaryo', '2 ta tovuqli somsa, 1 ta go`shtli somsa');
INSERT INTO
    orders(order_client_full_name, order_client_number, order_client_address, order_products)
VALUES('Alisher', '+998901234567', 'Surxondaryo', '2 ta tovuqli somsa, 1 ta go`shtli somsa');