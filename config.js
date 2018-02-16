api_url = (process.env.API_URL || 'localhost');
api_port = (process.env.API_PORT || '3000');

module.exports = {
  'api_url': api_url,
  'api_port': api_port
}

/*api_url = normalizePort(process.env.API_URL || 'localhost');
api_port = normalizePort(process.env.API_PORT || '3000');

app.set('api_url', api_url);
app.set('api_port', api_port);?
*/
