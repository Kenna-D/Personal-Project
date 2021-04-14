const {STRIPE_SECRET_KEY} = process.env;
const stripe = require("stripe")(STRIPE_SECRET_KEY);

module.exports = {
  payment: async (req, res) => {
    const {amount, token} = req.body;
    
    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'usd',
      source: token.id,
      description: 'This is a test charge.'
    });

    if(charge){
      res.status(200).send('Charge successful.')
    }
  }
};