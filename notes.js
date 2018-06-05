// console.log('Starting notes.js');

const fs = require('fs');

const fileName = 'notes-data.json';

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync(fileName);
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync(fileName, JSON.stringify(notes))
};

var addNote = (title, body) => {
  console.log(`adding note ${title} ${body}`);
  var notes = fetchNotes();
  var note = { title, body };

  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);

  return notes.length != filteredNotes.length;
};

var getAll = () => {
  return fetchNotes();
};

var logNote = (note) => {
  debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};


module.exports = {
  addNote, getNote, removeNote, getAll, logNote
};

// module.exports.age = 25;
//
// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'New Note';
// };
//
// module.exports.addValues = (a, b) => {
//   console.log(`${a} + ${b}`);
//   return a + b;
// };
