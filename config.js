
var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();

if (appEnv.isLocal) {
  var uri = 'mongodb://localhost:27017/users';
} else {
  var vcaps_services = JSON.parse(process.env.VCAP_SERVICES);
  var uri = vcaps_services['mlab'][0].credentials.uri;
}

api_url = (process.env.API_URL || 'localhost');
api_port = (process.env.API_PORT || '3000');

module.exports = {
  'api_url': api_url,
  'api_port': api_port
}
