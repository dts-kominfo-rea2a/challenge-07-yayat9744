const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  let dataTheaterIXX = await promiseTheaterIXX();
  let dataTheaterVGC = await promiseTheaterVGC();
  let data = dataTheaterIXX.concat(dataTheaterVGC);
  let jmlEmosi = data.filter((dataFilm) => dataFilm.hasil === emosi);
  return jmlEmosi.length;
};

module.exports = {
  promiseOutput,
};
