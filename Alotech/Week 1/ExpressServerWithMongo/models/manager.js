const schemaIletisim = require("./schemas/s-iletisim");
const schemaHakkimda = require("./schemas/s-hakkimda");
const schemaIndex = require("./schemas/s-index");

const nameAndSchemas = {
  Hakkimda: ["Hakkimda", schemaHakkimda],
  Iletisim: ["Iletisim", schemaIletisim],
  Index: ["Index", schemaIndex],
};

module.exports = nameAndSchemas;
