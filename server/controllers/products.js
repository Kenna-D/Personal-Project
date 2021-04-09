module.exports = {
  getAll: (req, res) => {
    const db = req.app.get('db')
    db.product.get_all_products().then(products => res.status(200).send(products));
  },
  getOne: (req, res) => {
    const db = req.app.get('db');
    db.product.get_one_product(req.params.id)
    .then(product => product[0] ? res.status(200).send(product[0]) : res.status(200).send({}))
  }
};