const mongoose = require("mongoose");
const { Hakkimda } = require("../manager");

const modelHakkimda = mongoose.model(...Hakkimda);

module.exports = modelHakkimda;
