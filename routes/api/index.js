const router = require('express').Router(); // Import the Express Router to create routes.

const userRoutes = require('./userRoutes'); 
const thoughtRoutes = require('./thoughtRoutes'); 


router.use('/users', userRoutes); 
router.use('/thoughts', thoughtRoutes); 

module.exports = router; // Export the router for use in the main application.
