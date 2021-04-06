INSERT INTO love_your_shelf_ordered_products (user_id, product_id, delivery_location, custom_details)
VALUES ($1, $2, $3, $4)
RETURNING *;