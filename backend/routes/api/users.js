const express = require("express");
const asyncHandler = require("express-async-handler");

const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { User, Song, Comment } = require("../../db/models");
const router = express.Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { db } = require("../../config");

const validateSignup = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("Please provide a valid email."),
  check("username")
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage("Please provide a username with at least 4 characters."),
  check("username").not().isEmail().withMessage("Username cannot be an email."),
  check("password")
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage("Password must be 6 characters or more."),
  handleValidationErrors,
];

// Sign up
router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);
// Edit
router.put(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const user = await User.findByPk(req.params.id);
    const { email, username, imgUrl } = req.body;
    const users = await user.update({ email, username, imgUrl });
    return res.json(users);
  })
);

//users
router.get("/", asyncHandler(async (req, res) => {
    const user = await User.findAll();
    return res.json(user);
  })
);

router.get("/:id(\\d+)",
  asyncHandler(async (req, res) => {
    const artistId = req.params.id;
    const user = await User.getCurrentUserById(artistId);
    return res.json(user);
  })
);

//get users songs
router.get('/:id(\\d+)/songs', asyncHandler(async (req, res) => {
   const artistId = req.params.id;
    const user = await User.getCurrentUserById(artistId);
     const songs = await Song.findAll({
      where: {
        artistId,
      },
    });
  return res.json(songs);
}));

//create song
router.post("/:id(\\d+)/songs", requireAuth, asyncHandler(async (req, res) => {
    const { name, imgUrl, url } = req.body;
    const artistId = req.params.id;
     const user = await User.getCurrentUserById(artistId);
    const songs = await Song.create({
      name,
      imgUrl,
      artistId,
      url,
    });
    return res.json(songs);
  })
);

//get users comments
router.get('/:id(\\d+)/comments', asyncHandler(async (req, res) => {
   const userId = req.params.id;
     const comments = await Comment.findAll({
      where: {
        userId,
      },
    });
  return res.json(comments);
}));

//create comments ADD AUTH
// router.post(
//   "/:id(\\d+)/comments",
//   asyncHandler(async (req, res) => {
//     const { content } = req.body;
//     const userId = req.params.id;
//     const user = await User.getCurrentUserById(user.id);
//     const songId = await Song.findByPk(req.params.id);
//     const comments = await Comment.create({
//       userId,
//       songId,
//       content,
//     });
//     return res.json(comments);
//   })
// );


module.exports = router;
