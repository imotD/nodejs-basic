const { demandOption } = require("yargs");
const { saveContact } = require("./contacts");
const yargs = require("yargs");

yargs.command({
  command: "add",
  describe: "Menambahkan contact baru",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string"
    },
    email: {
      describe: "Email",
      demandOption: false,
      type: "string"
    },
    noHP: {
      describe: "Nomor Handphone",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    saveContact(argv.nama, argv.email, argv.noHP);
  }
});

yargs.parse();
