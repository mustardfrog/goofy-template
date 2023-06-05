const express = require('express');
const User = require('../../db/models/User');

const router = express.Router();

router.get("/test", (req, res) => res.send("book testing"));

router.get("/:id", (req, res) => {
  User.findById(req.params.id)
  .then(user => res.json(user))
  .catch(err => res.status(404).json({ notexist: "User not exist" }));
})

router.get("/", (req, res) => {
  User.find()
  .then(user => res.json(user))
  .catch(err => res.status(404).json({ nouserfound: "No User found" }))
})

// @route POST api/submit
router.post("/", (req, res) => {
  User.create(req.body)
  .then(user => res.json({ msg: "User added successfully" }))
  .catch(err => res.status(444).json({ error: "cannot add user" }))
})

module.exports = router;
