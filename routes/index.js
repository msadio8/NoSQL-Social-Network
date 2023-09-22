const router = require('express').Router(); // Import the Express Router to create routes.

const apiRoutes = require('./api'); // Import API routes.

// Mount API routes under '/api'
router.use('/api', apiRoutes);

// Middleware for handling wrong routes and sending a response
router.use((req, res) => res.status(404).send('Wrong route!')); // Send a 404 response for incorrect routes.

module.exports = router; // Export the router for use in the main application.
