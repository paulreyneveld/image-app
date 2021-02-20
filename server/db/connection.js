require('dotenv').confit()
const mongoose = require('mongoose');

const DB_URI = `mongodb+srv://dbUser:${process.env.DB_PASSWORD}@images.bi4kf.mongodb.net/image_gallery?retryWrites=true&w=majority`
mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});