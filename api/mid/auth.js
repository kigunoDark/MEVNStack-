const jwt = require('jsonwebtoken');

let auth = (req, res, next) => {
  const token = req.header('auth-token');
  if(!token) return res.status(401).send('Request is denied')

  try {
    const verif = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = verif;
    next();
  } catch(error) {
    res.status(400).send('Invalid token!');
  }
}

module.exports = auth;