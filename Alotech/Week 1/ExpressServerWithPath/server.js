const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev")); //logger middleware

//spesifik pathlere html ile cevap veriyoruz
app.get("/", (req, res) => {
  res.sendFile("html/index.html", { root: __dirname });
});

app.get("/hakkimda", (req, res) => {
  res.sendFile("html/hakkimda.html", { root: __dirname });
});

app.get("/iletisim", (req, res) => {
  res.sendFile("html/iletisim.html", { root: __dirname });
});

//son path bulunamayan sayfaları işler 404 sayfası atar çünkü diğer hiç biri handle edemez
app.use((req, res) => {
  res.sendFile("html/404.html", { root: __dirname });
});

app.listen(3000, () => {
  console.log(`Server listening on port ${3000}`);
});
