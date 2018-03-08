
var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();

var newrelic_license_key, uri;

if (appEnv.isLocal) {
  uri = 'http://localhost:3000';
  newrelic_license_key = process.env.NEW_REILIC_LICENSE_KEY;
} else {
  uri = appEnv.getServiceURL("user-api-service");
  newrelic_license_key = appEnv.getServiceURL("newrelic");
}

module.exports = {
  'api_url': uri,
  'newrelic_license_key': newrelic_license_key,
}
