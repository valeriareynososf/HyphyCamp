const express = require("express");
const asyncHandler = require("express-async-handler");

// const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Song } = require("../../db/models");
const router = express.Router();
// const { check } = require("express-validator");
// const { handleValidationErrors } = require("../../utils/validation");
// const { db } = require("../../config");

router.get("/", asyncHandler(async (req, res) => {
    const songs = await Song.findAll();
    return res.json(songs);
  })
);

router.get("/:id(\\d+)", asyncHandler(async (req, res) => {
    const songs = await Song.findByPk(req.params.id);
    return res.json(songs);
  })
);

module.exports = router;