const { question, saveContact } = require("./contacts");

const main = async () => {
  const nama = await question("Masukan nama anda : ");
  const email = await question("Masukan email anda : ");
  const noHP = await question("Masukan no HP anda : ");

  saveContact(nama, email, noHP);
};

main();
