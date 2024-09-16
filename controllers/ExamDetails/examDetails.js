const { create } = require("./createExam");
const { get } = require("./getAllExam");
const { getOne } = require("./getOneExam");
const { update } = require("./updateExam");
const Delete = require("./deleteExam");

module.exports.create = async (req, res) => {
  create(req.body).then((data) => {
    res.json(data);
  });
};

module.exports.get = async (req, res) => {
  console.log(req.query.id);
  if (req.query.id) {
    getOne(req.query.id).then((data) => {
      res.json(data);
    });
  } else {
    get().then((data) => {
      res.json(data);
    });
  }
};

module.exports.delete = async (req, res) => {
  console.log(req.query.id);
  Delete.delete(req.query.id).then((data) => {
    res.json(data);
  });
};

module.exports.update = async (req, res) => {
  update(req.body).then((data) => {
    res.json(data);
  });
};
