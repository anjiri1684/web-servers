const path = require("path");
const express = require("express");

const app = express();
const port = 8080;

const publicDirectory = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectory));

app.get("/", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
