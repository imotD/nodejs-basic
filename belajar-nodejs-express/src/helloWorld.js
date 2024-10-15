import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("Orang hebat");
});

app.get("/test", (req, res) => {
  res.send(`Hello ${req.query.name}`);
});

app.listen(3000, () => {
  console.log("Testttt");
});
