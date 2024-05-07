const fs = require('fs');
const path = require('path');

// Set the directory path to the 'files' folder within the current directory
const dirPath = path.join(__dirname, 'files');
console.log("Directory path:", dirPath);

// Create multiple text files with some content
for (let i = 0; i < 5; i++) {
    const filePath = `${dirPath}/hello${i}.txt`;
    fs.writeFileSync(filePath, "some simple text in file");
    console.log(`File created: ${filePath}`);
}

// Read and print the filenames in the directory
fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error("Error reading directory:", err);
        return;
    }
    files.forEach(file => {
        console.log("File name is:", file);
    });
});
