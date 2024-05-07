const http = require('http');

const port = 8080;  // Define the port number as a variable

http.createServer((req, resp) => {
    resp.write("<h1>Hello Imtiyaz, you started working now.</h1>");
    resp.end();
}).listen(port);  // Use the port variable here

console.log("Yes, this is running on port", port);  // Correctly log the port number
