require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:3000' }));
app.use(express.json());

app.get('/api/health', (req, res) => res.json({ ok: true }));
app.use('/api/users', require('./routes/users'));
app.use('/api/exercises', require('./routes/exercises'));

// central error handler so routes can just call next(err)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ errors: ['Internal server error'] });
});

connectDB(process.env.MONGO_URI)
  .then(() => app.listen(port, () => console.log(`Fitkit API listening on http://localhost:${port}`)))
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
