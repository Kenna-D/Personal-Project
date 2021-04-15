INSERT INTO love_your_shelf_ordered_products (user_id, product_id, color, delivery_or_pickup, custom_details)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;