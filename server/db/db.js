const mongoose = require('mongoose');

try {
  mongoose.connect("mongodb://localhost:27017/mongoose_db");
  console.log("connected to mongodb ")
} catch (err) {
  console.log(err.message);
}
