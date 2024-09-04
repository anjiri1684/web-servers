const path = require("path");
const express = require("express");

const app = express();
const port = 8080;

const publicDirectory = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates");

app.set("view engine", "hbs");
app.set("views", viewsPath);

app.use(express.static(publicDirectory));

app.get("", (req, res) => {
  res.render("index", {
    title: "Weather App",
    name: "Vincent Anjiri",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Me",
    name: "Vincent Anjiri",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Get Help",
    getHelp: "Visit our offices for assistance",
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
