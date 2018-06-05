// console.log('Starting app.js');

const fs = require('fs');
// const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = { describe: 'Title of note', demand: true, alias: 't' };
const bodyOptions = { describe: 'Body of note', demand: true, alias: 'b' };

const argv = yargs
  .command('add', 'Add a new note', { title: titleOptions, body: bodyOptions })
  .command('list', 'List all notes')
  .command('read', 'Read a note', { title: titleOptions })
  .command('remove', 'Remove a note', { title: titleOptions })
  .help()
  .argv;
const command = argv._[0];
// console.log('yargs', argv);


switch(command) {
  case 'add':
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
      console.log('Note created');
      notes.logNote(note);
    } else {
      console.log('Note title taken');
    }
    break;
  case 'read':
    var note = notes.getNote(argv.title);
    if (note) {
      console.log('Note found');
      notes.logNote(note);
    } else {
      console.log('Note not found');
    }
    break;
  case 'remove':
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
    break;
  case 'list':
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
    break;
  default:
    console.log('command not recognized');
}




// var res = notes.addValues(1, 2);
// console.log(res);
//
// console.log(_.isString(true));
// console.log(_.isString('Taz'));
//
// console.log(_.uniq([2, 1, 4, 5, 7, 8, 5, 1, 4]))

// var user = os.userInfo();
//
// fs.appendFile('greetings.txt',
//               `Hello ${user.username}! You are ${notes.age}`,
//               function (err) {
//   if (err) {
//     console.log('Unable to write to file');
//   }
// });
