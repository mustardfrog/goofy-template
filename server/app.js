const express = require('express');
const app = express();

const db = require('./db/db');

const User = require('./db/models/User');

const port = process.env.PORT || 9000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const firstUser = new User({
  username: 'chaeng',
  age: 20
})
firstUser.save();

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
}
)
