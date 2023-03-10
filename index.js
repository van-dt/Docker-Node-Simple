const express = require("express");
const app = express();

const path = require("path");
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

// template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resource", "views"));

app.get("/", (_req, res) => {
  return res.render("home");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
