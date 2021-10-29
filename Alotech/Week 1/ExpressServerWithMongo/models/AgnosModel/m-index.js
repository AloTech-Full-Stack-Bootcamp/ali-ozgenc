const mongoose = require("mongoose");
const { Index } = require("../manager");

const modelIndex = mongoose.model(...Index);

module.exports = modelIndex;
