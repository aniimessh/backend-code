const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/TestDatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Databse connected Succesfully");
    })
    .catch((err) => {
      console.log("Error While Conneting Database",err.message);
    });
};

module.exports = connectDB