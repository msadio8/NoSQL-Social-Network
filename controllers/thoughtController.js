const { Types } = require("mongoose");
const Thought = require("../models/Thought");
const User = require("../models/User");
const Reaction = require("../models/Reaction");

const ThoughtController = {
  // Handler for the "get all thoughts" API endpoint
    async getAllThoughts(req, res) {
        try {
          const thoughts = await Thought.find({});
          res.json(thoughts);
        } catch (err) {
          res.status(500).json(err);
        }
    },

  // Handler for the "get thought by ID" API endpoint
    async getThoughtById(req, res) {
        try {
            const thought = await Thought.findById(req.params.thoughtId);
            if (!thought) {
              return res.status(404).json({ message: "Thought not found" });
            }
            res.json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
    },

  // Handler for the "create thought" API endpoint
    async createThought(req, res) {
        try {
          const thought = await Thought.create(req.body);
          res.status(201).json(thought);
        } catch (err) {
          res.status(500).json(err);
        }
    },

  // Handler for the "delete thought" API endpoint
    async deleteThought(req, res) {
        try {
          const thought = await Thought.findByIdAndDelete(req.params.thoughtId);
            if (!thought) {
              return res.status(404).json({ message: "Thought not found" });
            }
            res.status(204).end(); // No content response for successful deletion
        } catch (err) {
           res.status(500).json(err);
        }
    },

  // Handler for the "update thought by ID" API endpoint
    async updateThoughtById(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
              new: true,
            });
            if (!thought) {
              return res.status(404).json({ message: "Thought not found" });
            }
            res.json(thought);

        } catch (err) {
          res.status(500).json(err);
        }
    },

  // Handler for the "create reaction" API endpoint
    async createReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
              {_id:req.params.thoughtId},
              { $addToSet: { reactions: req.body } },
              { runValidators: true, new: true }
            );
            if (!thought) {
              return res.status(404).json({ message: "Thought not found" });
            }
            res.json(thought);
        }catch (e) {
          res.status(500).json(e);
        }
    },

  // Handler for the "delete reaction" API endpoint
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
               {_id: req.params.thoughtId},
               { $pull: { reactions: { reactionId: req.params.reactionId } } },
               { runValidators: true, new: true }
            );
            if (!thought) {
                return res.status(404).json({ message: "Thought not found" });
            }
            res.json(thought);
        } catch (e) {
          res.status(500).json(e);
        }
    },
};

module.exports = ThoughtController;
