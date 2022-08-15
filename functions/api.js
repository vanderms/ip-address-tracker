const express = require('express');
const serverless = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  
  res.json({
    ip: req.headers['x-nf-client-connection-ip']
  })
})

app.use('/api', router);

module.exports.handler = serverless(app);