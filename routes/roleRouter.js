const userController = require("../controllers/roleController")
const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");

router.post("/register", userController.register);
router.get("/login", userController.login);

router.get("/profile", verifyToken, (req,res)=>{
    res.send("profile page is now access")
} )

module.exports = router