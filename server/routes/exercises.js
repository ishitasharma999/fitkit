const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const Exercise = require('../models/exercise');
const User = require('../models/user');

// GET /api/exercises -> all records, newest first
router.get('/', async (req, res, next) => {
  try {
    const exercises = await Exercise.find().sort({ date: -1, createdAt: -1 });
    res.json(exercises);
  } catch (err) {
    next(err);
  }
});

// POST /api/exercises -> record an activity for an existing user
router.post(
  '/',
  [
    body('username').trim().notEmpty().withMessage('Username is required'),
    body('activity').trim().notEmpty().withMessage('Activity is required'),
    body('duration').isInt({ min: 1 }).withMessage('Duration must be a whole number of minutes'),
    body('date').isISO8601().withMessage('Date must be a valid date'),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array().map((e) => e.msg) });
    }
    try {
      const { username, activity, duration, date } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ errors: [`No user named "${username}" — create the user first`] });
      }
      const exercise = await Exercise.create({ username, activity, duration, date });
      res.status(201).json(exercise);
    } catch (err) {
      next(err);
    }
  }
);

// DELETE /api/exercises/:id
router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Exercise.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ errors: ['Record not found'] });
    res.json({ id: deleted._id });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
