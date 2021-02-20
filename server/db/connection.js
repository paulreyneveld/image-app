require('dotenv').config()
const mongoose = require('mongoose');

const DB_URI = `mongodb+srv://iaUser:${process.env.DB_PASSWORD}@images.bi4kf.mongodb.net/images?retryWrites=true&w=majority`

mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(response => console.log('DB Connected'))
  .catch(error => console.log(error));