// Imports express into  app and sets it up for use
const express = require('express');
const path = require('path');
const app = express();
// Sets server to use the public directory for static assets
app.use(express.static('app/public'));
// Defines a PORT for the server to listen for requests
const PORT = 8080;

// Sets up server to parse request body for usage
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// -----------------

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js')(app);

// Starts server on the predefined PORT
app.listen(PORT, function(){
  console.log(`App is now listening on PORT ${PORT}`)
})