const fs = require('fs');
// Create a new file and write to it asynchronously
fs.writeFile('example.txt', 'Hello, this is a test file!', (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('File created successfully!');
  }
});

// Synchronous file write example
fs.writeFileSync('exampleSync.txt', 'This is a synchronous file write example!');

// Read the content of the file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File content:', data);
  }
});

// Synchronous file read example
fs.readFileSync('exampleSync.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('Synchronous file content:', data);
  }
});

// Append text to the file asynchronously
fs.appendFile('example.txt', '\nAppending some text!', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Text appended successfully!');
  }
});

fs.appendFileSync('exampleSync.txt', '\nAppending text synchronously!');

// Delete the file asynchronously
fs.unlink('example.txt', (err) => {       
  if (err) {
    console.error('Error deleting file:', err);
  } else {
    console.log('File deleted successfully!');
  }
} );

fs.unlinkSync('exampleSync.txt'); // Synchronous file deletion  
     
// Check if a file exists
fs.access('example.txt', fs.constants.F_OK, (err) => {
  if (err) {
    console.error('File does not exist:', err);
  } else {
    console.log('File exists!');
  }
});

// Synchronous file existence check
try {
  fs.accessSync('exampleSync.txt', fs.constants.F_OK);
  console.log('Synchronous file exists!');
} catch (err) {
  console.error('Synchronous file does not exist:', err);
}

// Get file statistics
fs.stat('example.txt', (err, stats) => {          
  if (err) {
    console.error('Error getting file stats:', err);
  } else {
    console.log('File stats:', stats);
  }
});

// Synchronous file statistics
try {         
  const stats = fs.statSync('exampleSync.txt');
  console.log('Synchronous file stats:', stats);
} catch (err) {
  console.error('Error getting synchronous file stats:', err);
}

// Rename a file asynchronously
fs.rename('example.txt', 'renamedExample.txt', (err) => {       
  if (err) {
    console.error('Error renaming file:', err);
  } else {
    console.log('File renamed successfully!');
  }
});

// Synchronous file rename
try {     
  fs.renameSync('exampleSync.txt', 'renamedExampleSync.txt');
  console.log('Synchronous file renamed successfully!');
} catch (err) {
  console.error('Error renaming synchronous file:', err);
} 

// List files in a directory
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
  } else {
    console.log('Files in directory:', files);
  }
});
