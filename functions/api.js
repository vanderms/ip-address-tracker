const { default: axios } = require('axios');
const express = require('express');
const serverless = require('serverless-http');
const { getIP } = require('../utilities/get-ip');
require('dotenv').config()

const app = express();

const router = express.Router();

router.get('/', async (req, res) => {

  const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.API_KEY}&ipAddress=${getIP(req)}`;

  const response = await axios.get(URL);

  const ipData = {
    ip: response.data.ip,
    location: `${response.data.location.country} ${response.data.location.region} ${response.data.location.city}`,
    timezone: response.data.location.timezone,
    isp: response.data.isp,
    lat: response.data.location.lat,
    lng: response.data.location.lng
  };

  res.json(ipData)
});

app.use('/api', router);

module.exports.handler = serverless(app);