const express = require('express')
const bodyParser = require('body-parser')
const config = require('../config')

/**
 * Health Check endpoints
 * @TODO Explain why they are here
 */
app.get("/status", (req, res) => {
    res.status(200).end();
});
app.head("/status", (req, res) => {
    res.status(200).end();
});

// Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// It shows the real origin IP in the heroku or Cloudwatch logs
app.enable("trust proxy");

// Enable Cross Origin Resource Sharing to all origins by default
app.use(cors());

// Middleware that transform the raw string of req.body into a json
app.use(bodyParser.json());

// Load API routes
app.use(config.api.prefix, routes);