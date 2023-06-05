const express = require('express');
const { dotenv } = require('dotenv').config();
const app = express();

const cors = require('cors');

const db = require('./db/db');
const router = require('./routes/api/submit');

const port = process.env.PORT || 9001;

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: true }));

app.use('/api/submit', router);
app.use(router);
app.use(cors({ origin: true, credentials: true }));

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})
