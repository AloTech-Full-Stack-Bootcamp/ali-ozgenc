const express = require("express");
const item = require("../models/AgnosModel/m-index");
const router = express.Router();

router.get("/", (req, res) => {
  item.find({}, (err, doc) => {
    res.render("index", { title: doc[0].title });
  });
});

module.exports = router;
