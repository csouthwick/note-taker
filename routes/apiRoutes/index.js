const { createNewNote, deleteNote, validateNote } = require('../../lib/notes');
let notes = require('../../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

router.delete('/notes/:id', (req, res) => {
  notes = deleteNote(req.params.id, notes);
  res.json(notes);
});

module.exports = router;
