const express = require("express");
const router = express.Router();

const newsController = require("../controllers/newsController");
const upload = require("../middleware/uploadMiddleware");
const verifyToken = require("../middleware/authMiddleware");

router.post("/create", verifyToken, upload.single("image"),  newsController.createNews);
router.get("/all", verifyToken, newsController.getAllNews);

module.exports = router;
