const {STRIPE_SECRET_KEY} = process.env;
const stripe = require("stripe")(STRIPE_SECRET_KEY);
const nodemailer = require('nodemailer');

module.exports = {
  payment: async function (req, res) {
    const {amount, token, product_id, color, deliveryOrPickup, customDetails, name, image, price} = req.body;
    const db = req.app.get('db');
    const {user_id} = req.session.user;


    //for email
    const companyName = 'Love Your Shelf';
    const companyEmail = 'loveyourshelf@email.com';
    const message = `Your order confirmation <br /><br /> Product: ${name} <br /> Price: ${price} <br /> Color: ${color} <br /> Delivery or Pickup: ${deliveryOrPickup} <br /> Custom Details: ${customDetails} <br /><br /> Please give us two buisness days to contact you about timeline and delivery methods. If you have any questions, contact us at loveyourshelf@email.com. <br/> Thank you for your buisness! -Love Your Shelf`;
    const email = db.user.get_email_by_user_id(user_id);
    const title = 'Order Confirmation';

    
    const charge = await stripe.charges.create({
      amount: amount,
      currency: 'usd',
      source: token.id,
      description: 'This is a test charge.'
    });

    const order = await makeOrder(db, user_id, product_id, color, deliveryOrPickup, customDetails);
    const emailClient = await emailClient(companyEmail, companyName, message, email, title, image);
    // const emailCompany = await emailCompany(EMAIL, PASSWORD, name, message);

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

function emailClient(companyEmail, companyName, message, email, title, image){
  try {
    let transporter = nodemailer.createTransport();

    let info = transporter.sendMail({
      from: `'${companyName}' <${companyEmail}>`,
      to: email,
      subject: title,
      html: `<div>${message}</div>
            <img src="cdi:unique@nodemailer.com" />`,
      attachments: [
        {
          cid: 'unique@nodemailer.com',
          path: image
        }
      ]
    }, (err, res) => {
      if(err){
        console.log('err', err)
      } else {
        console.log('res', res)
        res.status(200).send(info)
      }
    })
  } catch(err) {
      console.log(err)
      res.sendStatus(500)
    };
};
// function emailCompany(EMAIL, PASSWORD, name, message, email, title, image){

// };