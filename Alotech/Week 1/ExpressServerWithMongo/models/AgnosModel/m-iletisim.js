const mongoose = require("mongoose");
const { Iletisim } = require("../manager");

const modelIletisim = mongoose.model(...Iletisim);

module.exports = modelIletisim;
