const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  
  res.json({
    ip: req.headers['client-ip']
  })
})

app.use('/api', router);

module.exports.handler = serverless(app);