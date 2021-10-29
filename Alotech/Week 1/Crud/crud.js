import { mkdir, writeFile, readFile, unlink, rm } from "fs";

let data = { name: "Employee 1 Name", salary: 2000 };
let stringfyData = JSON.stringify(data);

//Klasör oluşturma
mkdir("./Odev", { recursive: true }, (err) => {
  if (err) throw err;
});

//Klasör içine istediğimiz dosyayı oluşturma
writeFile("./Odev/emplooyes.json", stringfyData, "utf8", (err) => {
  if (err) throw err;
  console.log("Dosya yazıldı");
});

console.log("selam");
//Oluşturduğumuz dosyayı okuma
readFile("./Odev/emplooyes.json", "utf8", (err, data) => {
  console.log(data, "<<<<< Dosya Okundu");
});

//Oluşturulan dosyayı güncelleme 5 saniye sonra dosya açılıp değer değişimi gözlemlenebilir
setTimeout(() => {
  readFile("./Odev/emplooyes.json", "utf8", (err, data) => {
    let jsonData = JSON.parse(data);
    jsonData.salary = 1234;
    let stringifyUpdateData = JSON.stringify(jsonData);
    writeFile("./Odev/emplooyes.json", stringifyUpdateData, "utf8", (err) => {
      if (err) throw err;
      console.log("Dosya Güncellendi");
    });
  });
}, 5000);

//Dosyayı Silme 10 saniye sonra silinicek
setTimeout(() => {
  unlink("./Odev/emplooyes.json", (err) => {
    if (err) throw err;
    console.log("Dosya silindi");
  });
}, 10000);

//Klasör 15 saniye sonra silinir
setTimeout(() => {
  rm("./Odev", { recursive: true }, (err) => {
    if (err) throw err;
    console.log("Klasör silindi");
  });
}, 15000);
