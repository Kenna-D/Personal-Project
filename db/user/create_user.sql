INSERT INTO love_your_shelf_users (username, hash, phone_number, email, is_admin)
VALUES ($1, $2, $3, $4, false)
RETURNING *;