const { create } = require("./createStudent");
const Delete = require("./deleteStudent");
const { get } = require("./showStudent");
const { update } = require("./updateStudent");
const { getOne } = require("./login");
module.exports.create = async (req, res) => {
  create(req.body).then((data) => {
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
  getOne(req.body).then((data) => {
    res.json(data);
  });
};

module.exports.update = async (req, res) => {
  update(req.body).then((data) => {
    res.json(data);
  });
};
