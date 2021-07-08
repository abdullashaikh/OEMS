const { create } = require("./createResult");
const { get } = require("./getAllResults");
// const { update } = require("./updateResult");
const Delete = require("./deleteResult");

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

// module.exports.update = async (req, res) => {
//   update(req.body).then((data) => {
//     res.json(data);
//   });
// };

module.exports.delete = async (req, res) => {
  Delete.delete(req.query.id).then((data) => {
    res.json(data);
  });
};
