const notes = require('../../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
  res.json(notes);
});

module.exports = router;
