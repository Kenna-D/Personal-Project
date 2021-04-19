module.exports = {
  getOrders: (req, res) => {
    const db = req.app.get('db');
    db.orders.search_order_by_user(req.params.id)
      .then(order => res.status(200).send(order))
      .catch(err => console.log(err));
  },
  editOrder: (req, res) => {
    const db = req.app.get('db');
    const {id} = req.params;
    const {details} = req.body;
    const {user_id} = req.session.user;
    db.orders.update_order(id, details, user_id)
    .then(order => res.status(200).send(order))
    .catch(err => console.log(err));
  },
  deleteOrder: (req, res) => {
    const db = req.app.get('db');
    const {id} = req.params;
    const {user_id} = req.session.user;
    db.orders.delete_order(id, user_id)
      .then(orders => res.status(200).send(orders))
      .catch(err => console.log(err));
  }
}