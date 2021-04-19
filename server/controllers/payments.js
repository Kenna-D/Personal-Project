const {STRIPE_SECRET_KEY} = process.env;
const stripe = require("stripe")(STRIPE_SECRET_KEY);

module.exports = {
  payment: async function (req, res) {
    const {amount, token, product_id, color, deliveryOrPickup, customDetails} = req.body;
    const db = req.app.get('db');
    const {user_id} = req.session.user;
    
    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'usd',
      source: token.id,
      description: 'This is a test charge.'
    });

    const order = await makeOrder(db, user_id, product_id, color, deliveryOrPickup, customDetails);

    if(charge){
      res.status(200).send({message:'Charge successful.', order})
    };
  }
  
};

function makeOrder(db, user_id, product_id, color, delivery_or_pickup, custom_details) {
    return db.orders.create_order(user_id, product_id, color, delivery_or_pickup, custom_details)
      .then(order => order)
      .catch(err => console.log(err));
  };