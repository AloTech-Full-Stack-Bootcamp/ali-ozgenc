const express = require("express");
const engine = require("express-react-views").createEngine();
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

mongoose.connect(process.env.SERV, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const port = process.env.PORT || 3000;
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "jsx");
app.engine("jsx", engine);

app.use(require("./controllers/Wrapper/w-main.js"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
