INSERT INTO love_your_shelf_products (image, group_id, price, details)
VALUES ($1, $2, $3, $4)
RETURNING *;