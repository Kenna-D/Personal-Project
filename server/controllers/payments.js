const { STRIPE_SECRET_KEY } = process.env;
const stripe = require("stripe")(STRIPE_SECRET_KEY);
const nodemailer = require("nodemailer");


module.exports = {
  payment: async function (req, res) {
    const {amount, token, product_id, color, deliveryOrPickup, customDetails, name, image, price} = req.body;
    const db = req.app.get("db");
    const { user_id } = req.session.user;

    //for email
    const companyName = "Love Your Shelf";
    const message = "Your order had been placed! Please give us two buisness days to contact you about timeline and delivery methods. You can review your order online! If you have any questions, contact us at love.your.shelf.801@gmail.com. Thank you for your buisness! -Love Your Shelf";
    const [{ email }] = await db.user.get_email_by_user_id(user_id);
    const title = "Order Confirmation";

    const charge = await stripe.charges.create({
      amount: amount,
      currency: "usd",
      source: token.id,
      description: "This is a test charge.",
    });

    const order = await makeOrder( db, user_id, product_id, color, deliveryOrPickup, customDetails);
    const nodemail = await emailClient(companyName, message, email, title,
      image
    );
    // const emailCompany = await emailCompany(EMAIL, PASSWORD, name, message);

    if (charge) {
      res.status(200).send({ message: "Charge successful.", order, nodemail });
    }
  },
};

function makeOrder(db, user_id, product_id, color, delivery_or_pickup, custom_details) {
  return db.orders
    .create_order( user_id, product_id, color, delivery_or_pickup, custom_details)
    .then((order) => order)
    .catch((err) => console.log(err));
}

function emailClient( companyName, message, email, title,) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      debug: true,
      auth: {
        type: "OAuth2",
        user: "love.your.shelf.801@gmail.com",
        clientId: "563157573077-al8mn6n5f1kia5oi90iefef0rj35boac.apps.googleusercontent.com",
        clientSecret: "K06oBPjU65rqbDw-hrfqjiSZ",
        refreshToken: "1//04NPkxnjkEDEuCgYIARAAGAQSNwF-L9Irrgz6jRYJHVU6_rnkg9EqGx-u3Ky1-sJFcmhtPG3pTcnFD0s9QYAeNqj4k2QvUADYRR4",
      },
    });

    let info = transporter.sendMail(
      {
        from: `'${companyName}' <love.your.shelf.801@gmail.com>`,
        to: 'kkdancer78@gmail.com',
        subject: title,
        html: `<div>${message}</div>`
        // attachments: [
        //   {
        //     cid: "unique@nodemailer.com",
        //     path: image,
        //   },
        // ],
      },
      (err, res) => {
        if (err) {
          console.log("err", err);
        } else {
          console.log("res", res);
          res.status(200).send(info);
        }
      }
    );
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
// function emailCompany(EMAIL, PASSWORD, name, message, email, title, image){

// };
