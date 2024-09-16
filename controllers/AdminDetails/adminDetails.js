const { create } = require("./createAdmin");
const { get } = require("./showAdmin");
const { update } = require("./updateAdmin");
const { getOne } = require("./login");
// const { delete } = require("./deleteAdmin");
const Delete = require("./deleteAdmin");

module.exports.create = async (req, res) => {
  create(req.body).then((data) => {
    res.json(data);
  });
};
module.exports.update = async (req, res) => {
  update(req.body).then((data) => {
    res.json(data);
  });
};

module.exports.delete = async (req, res) => {
  Delete.delete(req.query.id).then((data) => {
    res.json(data);
  });
};

module.exports.get = async (req, res) => {
  get().then((data) => {
    res.json(data);
  });
};

module.exports.getOne = async (req, res) => {
  console.log(req.body);
  getOne(req.body).then((data) => {
    res.json(data);
  });
};
