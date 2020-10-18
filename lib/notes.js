const fs = require('fs');
const path = require('path');
const { nanoid } = require('nanoid');

function createNewNote(body, notesArray) {
  const note = body;

  // create a unique id for the note
  note.id = nanoid();
  // push it into the array in memory
  notesArray.push(note);
  // write it to file
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );
  // return the saved note
  return note;
}

function deleteNote(id, notesArray) {
  // filter the array by notes that DO NOT have the id which is to be deleted
  notesArray = notesArray.filter(note => note.id !== id);
  // write the filtered array to file
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );
  // return the filtered array
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
