const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const User = require('../models/user');

// GET /api/users -> list of usernames (used by the activity form)
router.get('/', async (req, res, next) => {
  try {
    const users = await User.find({}, 'username createdAt').sort({ username: 1 });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// POST /api/users -> create a user
router.post(
  '/',
  [
    body('username').trim().isLength({ min: 3 }).withMessage('Username must be at least 3 characters'),
    body('email').trim().isEmail().withMessage('Enter a valid email address'),
    body('password').isLength({ min: 5 }).withMessage('Password must be at least 5 characters'),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array().map((e) => e.msg) });
    }
    try {
      const { username, email, password } = req.body;
      const passwordHash = await bcrypt.hash(password, 10);
      const user = await User.create({ username, email, passwordHash });
      res.status(201).json({ id: user._id, username: user.username });
    } catch (err) {
      if (err.code === 11000) {
        return res.status(409).json({ errors: ['That username is already taken'] });
      }
      next(err);
    }
  }
);

module.exports = router;
