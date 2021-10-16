const express = require("express");
const asyncHandler = require("express-async-handler");
const {requireAuth } = require("../../utils/auth");
// const { setTokenCookie, requireAuth } = require("../../utils/auth");
const { Song, Comment, User } = require("../../db/models");
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

router.put("/:id(\\d+)", requireAuth, asyncHandler(async (req, res) => {
    const song = await Song.findByPk(req.params.id);
    const { name, imgUrl, url } = req.body;
    const track = await song.update({
      name,
      imgUrl,
      url,
    });
    return res.json(track);
  })
);

router.delete(
  "/:id(\\d+)",
  requireAuth,
  asyncHandler(async (req, res) => {
    const song = await Song.findByPk(req.params.id);
    song.destroy();
    return res.json({ deleted: song });
  })
);

//get songs comments
router.get('/:id(\\d+)/comments', asyncHandler(async (req, res) => {
   const songId = req.params.id;
     const comments = await Comment.findAll({
      where: {
        songId,
      },
    });
  return res.json(comments);
}));


//create comments ADD AUTH
router.post("/:id(\\d+)/comments", requireAuth, asyncHandler(async (req, res) => {
    const { content } = req.body;
    const songId = req.params.id;
    const userId = req.user.id;
    const comments = await Comment.create({
      userId,
      songId,
      content,
    });
    return res.json(comments);
  })
);

//edit comment
// router.put("/:id(\\d+)", requireAuth, asyncHandler(async (req, res) => {
//     const { content } = req.body;
//     const song = await Song.findByPk(req.params.id);
//     const track = await song.update({
//       name,
//       imgUrl,
//       url,
//     });
//     return res.json(track);
//   })
// );
/* wcYy963y-tFAddt66mPCJ0xyeyy1seBweFgI
fetch('/api/users/9', {
  method: 'PUT',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `5tGGP1fg-WM8L4j5cWS15bWn4g42udYo1auk`
  },
  body: JSON.stringify({ imgUrl: 'https://profileimages1.s3.us-west-1.amazonaws.com/Luniz.jpeg' })
}).then(res => res.json()).then(data => console.log(data));
*/
module.exports = router;