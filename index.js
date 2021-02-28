const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.get("/fruits", (req, res) => {
  const fruits = [
  "Apple", "Orange", "Grape"
  ]
  res.json(fruits);
});

app.listen(PORT, () => console.log("App running at port: 4000"))