const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  claps: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('posts', PostSchema);