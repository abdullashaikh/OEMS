const { create } = require("./createTeacher");
const Delete = require("./deleteTeacher");
const { get } = require("./showTeacher");
const { update } = require("./updateTeacher");
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
  // console.log(req.query.id);
  get(req.query.id).then((data) => {
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
