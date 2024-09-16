const { create } = require("./createQuestion");
const { get } = require("./getAllQuestions");
const { update } = require("./updateQuestion");
const Delete = require("./deleteQuestion");

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

module.exports.update = async (req, res) => {
  update(req.body).then((data) => {
    res.json(data);
  });
};

module.exports.delete = async (req, res) => {
  //   console.log(req.query.id);
  Delete.delete(req.query.id).then((data) => {
    res.json(data);
  });
};
