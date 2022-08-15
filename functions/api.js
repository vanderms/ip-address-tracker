const express = require('express');
const serverless = require('serverless-http');
const { getIP } = require('../utilities/get-ip');
require('dotenv').config()

const app = express();

const router = express.Router();

router.get('/', (req, res) => {

  const ip = getIP(req);

  res.json({
    ip: ip,
    params: req.query,
    key: ''
  })
})

app.use('/api', router);

module.exports.handler = serverless(app);