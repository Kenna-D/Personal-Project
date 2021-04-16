DELETE FROM love_your_shelf_ordered_products
WHERE ordered_products_id = $1;
SELECT * FROM love_your_shelf_ordered_products op
JOIN love_your_shelf_products p on p.product_id = op.product_id
WHERE op.user_id = $2;