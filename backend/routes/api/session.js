const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");

// Log in
router.post(
  '/',
  asyncHandler(async (req, res, next) => {
    const { credential, password } = req.body;

    const user = await User.login({ credential, password });

    if (!user) {
      const err = new Error('Login failed');
      err.status = 401;
      err.title = 'Login failed';
      err.errors = ['The provided credentials were invalid.'];
      return next(err);
    }

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);

router.delete("/", (_req, res) => {
  res.clearCookie("token");
  return res.json({ message: "success" });
});

// Restore session user
router.get(
  '/',
  restoreUser,
  (req, res) => {
    const { user } = req;
    if (user) {
      return res.json({
        user: user.toSafeObject()
      });
    } else return res.json({});
  }
);

module.exports = router;
/* wcYy963y-tFAddt66mPCJ0xyeyy1seBweFgI
fetch('/api/session', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    "XSRF-TOKEN": `<value of XSRF-TOKEN cookie>`
  },
  body: JSON.stringify({ credential: 'Demo-lition', password: 'password' })
}).then(res => res.json()).then(data => console.log(data));
*/