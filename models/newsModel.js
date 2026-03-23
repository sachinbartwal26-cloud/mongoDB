const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
  newsTitle: {
    type: String,
    required: [true, "News title is required"],
    trim: true       //Spaces remove karega. ex->"  hello " => "hello"
  },

  description: {
    type: String,
    trim: true
  },

  image: {
    type: String,
    required: [true, "Image is required"]
  }

}, {
  timestamps: true,
  strict: true
});

module.exports = mongoose.model("News", newsSchema);
