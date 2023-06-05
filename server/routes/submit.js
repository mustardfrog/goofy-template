const express = require('express');
const User = require('./db/models/User');

const app = express();

const router = express.Router();

app.post('/submit', (req, res) => {
  const user = new User(req.body);
  user.save((err, savedFormData) => {
    if (err) {
      console.log(err);
      return res.status(500).send('Error saving form data');
    }
    return res.status(200).send("Form saved succesfully")
  })
})

module.exports = router;
