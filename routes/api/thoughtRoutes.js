const router = require('express').Router(); // Import the Express Router to create routes.

const {
  getAllThoughts,
  getThoughtsById,
  createThought,
  deleteThought,
  updateThoughtById,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController'); // Import controller functions for thought-related operations.

// Define routes for getting all thoughts and creating a new thought
router.route('/')
  .get(getAllThoughts) // GET: Retrieve all thoughts
  .post(createThought); // POST: Create a new thought

// Define routes for getting a thought by ID, updating a thought by ID, and deleting a thought by ID
router.route('/:thoughtId')
  .get(getThoughtsById) // GET: Retrieve a thought by its ID
  .put(updateThoughtById) // PUT: Update a thought by its ID
  .delete(deleteThought); // DELETE: Delete a thought by its ID

// Define a route for creating a reaction for a specific thought
router.route('/:thoughtId/reactions')
  .post(createReaction); // POST: Create a reaction for a thought by its ID

// Define a route for deleting a reaction for a specific thought by both thought and reaction ID
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction); // DELETE: Delete a reaction for a thought by its ID and reaction ID

module.exports = router; // Export the router for use in the main application.

