
var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();

if (appEnv.isLocal) {
  var uri = 'http://localhost:3000';
} else {
  var vcaps_services = JSON.parse(process.env.VCAP_SERVICES);
  var uri = vcaps_services['user-provided'][0].credentials.uri;
}

module.exports = {
  'api_url': uri,
}
