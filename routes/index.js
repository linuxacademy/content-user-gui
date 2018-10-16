var express = require('express');
var request = require('request');
var config = require('./../config');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("index page");

  var url = 'http://' + config.api_url

  if (config.api_port != 80) {
    url += ':' + config.api_port
  }
  
  url += '/users'
  console.log(url);

  request(url, { json: true }, (err, res2, body) => {
    console.log("request");
    if (err) {
      console.log(err);
      res.status(404).send(err);
    } else {
      console.log(body);

      res.render('index', { "users": body });
    }
  });
});

module.exports = router;
