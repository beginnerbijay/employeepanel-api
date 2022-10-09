const mongoose = require('mongoose');

const db = mongoose.connect('mongodb+srv://begineerbijay:milu@1234@cluster0.gq62ns5.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(()=>{console.log("db connected")})

module.exports = db;