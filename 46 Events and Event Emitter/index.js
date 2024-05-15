const express = require("express");
const EventEmitter = require("events");

const app = express();
const event = new EventEmitter();
let count = 0;

event.on("countAPI", () => {
 count++;
 console.log("event called", count);
});

app.get("/", (req, res) => {
 res.send("api called");
 event.emit("countAPI");
});

app.get("/serch", (req, res) => {
 res.send("api called");
 event.emit("serch countAPI");
});

app.get("/Update", (req, res) => {
 res.send("api called");
 event.emit("Update countAPI");
});

app.listen(7878);