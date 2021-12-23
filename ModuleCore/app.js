const { demandOption } = require("yargs");
const {
  saveContact,
  listContact,
  detailContact,
  deleteContact
} = require("./contacts");
const yargs = require("yargs");

yargs
  .command({
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
  })
  .demandCommand();

yargs.command({
  command: "list",
  describe: "Menampilan semua nama & no hp",
  handler() {
    listContact();
  }
});

yargs.command({
  command: "detail",
  describe: "Menampilan data detail berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    detailContact(argv.nama);
  }
});

yargs.command({
  command: "delete",
  describe: "Menghapus sebuah contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama Lengkap",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    deleteContact(argv.nama);
  }
});

yargs.parse();
