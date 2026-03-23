const News = require("../models/newsModel");

exports.createNews = async (req, res) => {
  try {
    const news = await News.create({
      newsTitle: req.body.newsTitle,
      description: req.body.description,
      image: req.file.path
    });

    res.status(201).json({
      message: "News created successfully",
      data: news
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

exports.getAllNews = async (req, res) => {
  const data = await News.find();

  res.json(data);
};
