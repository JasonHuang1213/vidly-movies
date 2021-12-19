const mongoose = require('mongoose')
require('dotenv').config()

module.exports = function() {
  const db = DATABASE_URL
  mongoose.connect(db)
    .then(() => console.log(`Connected to mongoDB Atlas...`))
    .catch(err => console.error(err))
}