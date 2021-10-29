const express = require("express");
const item = require("../models/AgnosModel/m-hakkimda");

const router = express.Router();

router.get("/hakkimda", (req, res) => {
  item.find({}, (err, doc) => {
    res.render("hakkimda", { title: doc[0].title });
  });
  //bu logici temizle burdan güzel durmuyor
});

module.exports = router;
