const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const secret = 'abcd54321';

router.post("/login", (req, res) => {
    const creds = {
        username: 'max',
        password: '1234'
    };

    if (req.body.username === creds.username && req.body.password === creds.password) {
      res.json({ status: "success", token: jwt.sign({ name: 'Max', favColor: "Green" }, secret), redirect: 'admin' });
    } else {
      res.json({ status: "failure" });
    }
  })


module.exports = router;