// This auth is about authorization
const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = function auth(req, res, next) {
  const token = req.header('x-auth-token');
  // 401 Unauthorized
  if(!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, process.env.vidly_jwtPrivateKey);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
}
