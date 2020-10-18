const { createNewNote, deleteNote, validateNote } = require('../../lib/notes');
// using let instead of const as the copy of notes that resides in memory will need to be reassigned if a note is deleted
let notes = require('../../db/db.json');
const router = require('express').Router();

router.get('/notes', (req, res) => {
  res.json(notes);
});

router.post('/notes', (req, res) => {
  if (!validateNote(req.body)) {
    res.status(400).send('The note is not properly formatted.');
  } else {
    // notes array will be passed by reference and will be updated by createNewNote
    const note = createNewNote(req.body, notes);
    // send back the note that was added
    res.json(note);
  }
});

router.delete('/notes/:id', (req, res) => {
  // deleteNote creates a new array of notes instead of modifying the existing one
  // assign the returned array to notes so the copy in memory is in sync with the copy on disk
  notes = deleteNote(req.params.id, notes);
  // send back the remaining notes
  res.json(notes);
});

module.exports = router;
