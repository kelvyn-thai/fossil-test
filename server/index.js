const express = require("express");
const app = express();
const path = require("path");
const ENVS = require("dotenv").config().parsed;
const cors = require("cors");
const multer = require("multer");
const bodyParser = require("body-parser");
const uuidv4 = require("uuid/v4");
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(express.static(path.resolve(__dirname, "../public")));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, "logo.png");
  }
});
const upload = multer({ storage: storage });


app.listen(ENVS.SERVER_PORT, () =>
  console.log(`Server start at port: ${ENVS.SERVER_PORT}`)
);
