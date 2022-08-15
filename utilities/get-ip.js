const getIP = (req) => {
  if (req.query.IP) {
    return req.query.IP;
  }
  if (process.env.CONTEXT === 'dev') {
    return '192.212.174.101';
  }
  return req.headers[ 'x-nf-client-connection-ip' ];
}

module.exports = { getIP };