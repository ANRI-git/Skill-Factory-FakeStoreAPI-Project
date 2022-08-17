function getDateFormat(req, res, next) {
  console.log(`${req.method} method in ${req.url} at ${new Date().toLocaleString()}`);
  next();
}

let dates = {
  getDateFormat,
};

module.exports = dates;
