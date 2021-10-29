const express = require("express");
const path = require("path");

const app = express();

//işlemtim sistemine dinamik path oluşturuyoruz
const staticPath = path.join(__dirname, "static");

//static dosyaların sunulduğu folderı ayarlıyoruz
app.use(express.static(staticPath));

//var olmayan sayfalar için 404 mw si
app.use((req, res) => {
  res.status(404);
  res.send("Sayfa Bulunamadı");
});

//5000. port üzerinden server başlatılır
app.listen(5000, () => {
  console.log("5000. port üzerinden uygulama başlatıldı");
});
