const express = require("express");
const item = require("../models/AgnosModel/m-iletisim");

const router = express.Router();

router.get("/iletisim", (req, res) => {
  item.find({}, (err, doc) => {
    res.render("iletisim", { title: doc[0].title });
  });
});

module.exports = router;
