import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

/* eslint-disable no-console */

let port = 3003;
const app = express();
console.log("Working");
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, err => {
  err
    ? console.log("Err", err.code)
    : open(`http://localhost:${port}`, console.log(`Running on Port ${port}`));
});

console.log("I am from the masert");
