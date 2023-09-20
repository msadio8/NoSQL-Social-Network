const mongoose = require("mongoose");
const { Schema } = mongoose;

// Define the User schema
const userSchema = new Schema(
    {
        username: {
           type: String,
           unique: true,
           required: true,
           trim: true,
        },

       email: {
           type: String,
           required: true,
           unique: true,
           match: /^\S+@\S+\.\S+$/, // Regular expression for a valid email address
        },
       thoughts: [
            {
             type: Schema.Types.ObjectId,
             ref: "Thought",
            },
        ],
        friends: [
           {
              type: Schema.Types.ObjectId,
              ref: "User",
            },
        ],
});

// Create a virtual called friendCount
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Define the Thought schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  username: {
    type: String,
    required: true,
  },
  reactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reaction",
    },
  ],
});

// Create a virtual called reactionCount
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Compile models from the schemas
const User = mongoose.model("User", userSchema);
const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = { User, Thought };
