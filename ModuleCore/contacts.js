const chalk = require("chalk");
const fs = require("fs");
const readline = require("readline");
const validator = require("validator");

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

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//membuat folder dara
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

//membuat file contact.json jika belum ada
const dataPath = "./data/contact.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const question = ask => {
  return new Promise((resolve, reject) => {
    rl.question(ask, nama => {
      resolve(nama);
    });
  });
};

const saveContact = (nama, email, noHP) => {
  const data = { nama, email, noHP };
  const fileBuffer = fs.readFileSync("data/contact.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);

  const duplikat = contacts.find(data => data.nama === nama);

  //cek duplikat
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("Contact sudah terdaftar, gunakan nama lain !")
    );
    return false;
  }

  //cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("Email tidak valid!"));
      return false;
    }
  }
  //cek number
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomor ponsel tidak valid!"));
    return false;
  }

  contacts.push(data);

  fs.writeFileSync("data/contact.json", JSON.stringify(contacts));

  console.log(chalk.green.inverse.bold("terimakasih sudah memasukan data."));

  rl.close();
};

module.exports = { question, saveContact };
