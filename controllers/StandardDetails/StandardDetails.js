const { create } = require("./CreateStandard");
const { get } = require("./getAllStandard");

module.exports.create = async (req, res) => {
  create(req.body).then((data) => {
    res.json(data);
  });
};

module.exports.get = async (req, res) => {
  get().then((data) => {
    res.json(data);
  });
};
