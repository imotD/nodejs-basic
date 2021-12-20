const fs = require("fs");

// * menuliskan string ke file (sync)
// fs.writeFileSync("test.txt", " Hello World Secara Synchronous");

// * menuliskan string ke file (async)
// fs.writeFile("test.txt", "Hello World Secara Asyncrouns", err => {
//   console.log(err);
// });

// * membaca isi file (sync)
// const data = fs.readFileSync('test.txt','utf-8')
// console.log(data)

// * membaca isi file (async)
// fs.readFile("test.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("masukan nama anda?", nama => {
  rl.question("masukan umur anda ?", umur => {
    const data = {
      nama,
      umur
    };
    const file = fs.readFileSync("contact.json", "utf-8");
    const contact = JSON.parse(file);

    contact.push(data);

    fs.writeFileSync("contact.json", JSON.stringify(contact));

    console.log("Terimakasih Sudah Meluangkan Waktu");

    rl.close();
  });
});
