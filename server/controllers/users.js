const bcrypt = require('bcryptjs');

module.exports = {
  register: async (req, res) => {
    const {username, password, phone_number, email} = req.body;
    const isAdmin = false;
    const db = req.app.get('db');

    const result = await db.user.search_user_by_username([username]);
    const existingUser = result[0];

    if(existingUser){
      return res.status(409).send('Username Taken')
    };

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const registerUser = await db.user.create_user([username, hash, phone_number, email, isAdmin]);

    const user = registerUser[0];

    req.session.user = {user_id: user.user_id, username: user.username, phone_number: user.phone_number, email: user.email, is_admin: user.is_admin};

    res.status(200).send(req.session.user);
  },
  login: async (req, res) => {
    const {username, password} = req.body;
    
    const searchUser = await req.app.get('db').user.search_user_by_username([username]);
    const user = searchUser[0];

    if(!user){
      return res.status(409).send('Username / Password is incorrect')
    };
// console.log(user)
    const isAuthenticated = bcrypt.compareSync(password, user.hash);
// console.log(isAuthenticated)
    if(!isAuthenticated){
      return res.status(409).send('Username / Password is incorrect')
    };

    console.log(user);

    delete user.hash;

    req.session.user = {username: user.username, user_id: user.user_id, phone_number: user.phone_number, email: user.email, is_admin: user.is_admin};

    res.status(200).send(req.session.user);
  },
  logout: async (req, res) => {
    req.session.destroy();
    res.status(200);
  },
  getUser: async (req, res) => {
    if(!req.session.user){
      return res.sendStatus(404);
    };
    res.status(200).send(req.session.user);
  }
}