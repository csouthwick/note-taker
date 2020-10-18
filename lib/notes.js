const fs = require('fs');
const path = require('path');
const { nanoid } = require('nanoid');

function createNewNote(body, notesArray) {
  const note = body;
  note.id = nanoid();
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
}

function deleteNote(id, notesArray) {
  notesArray = notesArray.filter(note => note.id !== id);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );
  return notesArray;
}

function validateNote(note) {
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  return true;
}

module.exports = {
  createNewNote,
  deleteNote,
  validateNote
};
