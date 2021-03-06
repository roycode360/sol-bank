const path = require("path");
const express = require("express");

const app = express();
app.enable("trust proxy");

/******************************** Code for redirecting all requests to https ************************/
// app.use((req, res, next) => {
//   req.secure ? next() : res.redirect("https://" + req.headers.host + req.url);
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const publicPath = path.join(__dirname, "..", "build");

const port = process.env.PORT || 5000;

app.use(express.static(publicPath));
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.listen(port, () => {
  console.log("server is up");
});
