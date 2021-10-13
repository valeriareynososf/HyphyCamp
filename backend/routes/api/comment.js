const express = require("express");
const asyncHandler = require("express-async-handler");
const { requireAuth } = require("../../utils/auth");
const { Comment } = require("../../db/models");
const router = express.Router();

//get all comments
router.get("/", asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();
    return res.json(comments);
  })
);


module.exports = router;