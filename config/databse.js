const mongoose = require('mongoose')


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_STRING);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;

module.exports = {
  url: process.env.DB_STRING,
  database: "recipe_app",
  imgBucket: "photos",
};

app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});
