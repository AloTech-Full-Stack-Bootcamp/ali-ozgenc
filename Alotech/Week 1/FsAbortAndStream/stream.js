import fs from "fs";

let chunks = [];

let buff;

//kural.txt den akan bir akış yaratıyoruz
let stream = fs.createReadStream("./kural.txt");

//streamdeki hataları işliyoruz eğer olursa
stream.once("error", (err) => {
  console.log(err);
});

//observerın dinlediği end eventi gerçekleşince bufferları birleştiriyoruz
stream.once("end", () => {
  buff = Buffer.concat(chunks);
});

stream.on("data", (chunk) => {
  for (let i = 0; i < 1000000000; i++) {
    if (i == 999999999) console.log(chunk); //parça parça alıyoruz verileri buffer olarak
  }
  chunks.push(chunk);
});
