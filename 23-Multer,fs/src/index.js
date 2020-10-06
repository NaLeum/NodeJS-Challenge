import express from "express";
import path from "path";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs";

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

const home = (req, res) => {
  res.render("home");
};

const multerText = multer({ dest: "src/uploads" });

const uploadText = multerText.single("txtFile");

const postUpload = (req, res) => {
  const {
    file: { path }
  } = req;
  fs.readFile(path, "utf8", (err, data) => {
    res.render("read", { text: data });
  });
};

app.get("/", home);
app.post("/upload", uploadText, postUpload);
// Codesanbox does not need PORT :)
app.listen(() => console.log(`Listening!`));
