// file-operations.js
const fs = require("fs");

// Create welcome.txt and write "Hello Node" to it
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File has been created and written to.");

  // Read from the file and log the data
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);
  });
});
