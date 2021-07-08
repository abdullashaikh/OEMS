const { create } = require("./CreateSubject");
const { getOne } = require("./getOneSubject");

module.exports.create = async (req, res) => {
  create(req.body).then((data) => {
    res.json(data);
  });
};
module.exports.getOne = async (req, res) => {
  getOne(req.query.id).then((data) => {
    res.json(data);
  });
};
