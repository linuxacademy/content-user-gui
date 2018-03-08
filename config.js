
var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();

var newrelic_license_key, uri;
newrelic_license_key = process.env.NEW_REILIC_LICENSE_KEY;

if (appEnv.isLocal) {
  uri = 'http://localhost:3000';
} else {
  uri = appEnv.getServiceURL("user-api-service");
}

module.exports = {
  'api_url': uri,
  'newrelic_license_key': newrelic_license_key,
}
