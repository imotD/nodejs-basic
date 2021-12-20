// ? contoh-contoh module
// * const fs = require('fs'); ==> core module
// * const module = require('./module'); ==> local module
// * const moment = require('moment'); ==> third party module

function cetakNama(nama) {
  return `Halo, nama saya ${nama}`;
}

const PI = 3.14;

module.exports = {
  cetakNama,
  PI
};
