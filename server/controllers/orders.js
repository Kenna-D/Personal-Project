module.exports = {
  getOrders: (req, res) => {
    const db = req.app.get('db');
    db.orders.search_order_by_user(req.params.id)
      .then(order => order ? res.status(200).send(order) : res.status(200).send({}))
      .catch(err => console.log(err));
  },
  makeOrders: (req, res) => {
    const db = req.app.get('db');
    const {user_id} = req.params.id;
    const {product_id, color, delivery_or_pickup, custom_details} = req.body;
    db.orders.create_order(user_id, product_id, color, delivery_or_pickup, custom_details)
      .then(order => res.status(200).send(order))
      .catch(err => console.log(err));
  }
}