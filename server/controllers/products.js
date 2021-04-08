module.exports = {
  getAll: (req, res) => {
    const db = req.app.get('db')
    db.product.get_all_products().then(products => res.status(200).send(products));
  }
}