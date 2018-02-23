
var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();

if (appEnv.isLocal) {
  var uri = 'http://localhost:3000';
} else {
  var uri = appEnv.getServiceURL("user-api-service");
}

module.exports = {
  'api_url': uri,
}
