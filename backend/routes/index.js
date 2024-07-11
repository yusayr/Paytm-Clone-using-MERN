const express = require("express");
const router = express.Router();
const userRouter = require('./user')

router.use("/user", userRouter); //base URL

module.exports = router;