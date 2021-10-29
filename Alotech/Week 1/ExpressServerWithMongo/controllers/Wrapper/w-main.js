const express = require("express");
const router = express.Router();

const iletisim = require("../c-iletisim");
const hakkimda = require("../c-hakkimda");
const index = require("../c-index");

router.use(iletisim);
router.use(hakkimda);
router.use(index);

module.exports = router;
