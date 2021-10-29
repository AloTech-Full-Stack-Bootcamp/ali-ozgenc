import { readFile } from "fs";

let sayac = 0;

while (sayac < 5) {
  const controller = new AbortController();
  const signal = controller.signal;
  console.log(sayac);
  readFile("./kural.txt", { signal, encoding: "utf8" }, (err, data) => {
    console.log(data, ">>>>>>>>>>>>>>>>> sayac", sayac);
  });

  if (sayac != 0) {
    console.log("sa");
    controller.abort();
    //abort kullanarak iptal edebilirim
  }

  sayac++;
}
