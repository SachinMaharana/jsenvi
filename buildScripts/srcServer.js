import express from "express";
import path from "path";
import open from "open";

let port = 3003;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, err => {
  err
    ? console.log("Err", err.code)
    : open(`http://localhost:${port}`, console.log(`Running on Port ${port}`));
});
