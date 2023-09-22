// Import necessary modules and controller functions
const router = require('express').Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require('../../controllers/userController.js');

// Define routes for user-related operations
router.route('/')
  .get(getAllUsers)   // Get all users
  .post(createUser);  // Create a new user

router
  .route('/:userId')
  .get(getUserById)     // Get a user by ID
  .put(updateUserById)  // Update a user by ID
  .delete(deleteUserById); // Delete a user by ID

router
  .route('/:userId/friends/:friendId')
  .post(addFriend)    // Add a friend for a user by their ID
  .delete(removeFriend); // Remove a friend for a user by their ID

// Export the router for use in the main application
module.exports = router;
