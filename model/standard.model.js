const mongoose = require("../config/mongo-connection");
const Schema = mongoose.Schema;

const StandardDetails = mongoose.Schema({
  name: Schema.Types.String,
  desc: Schema.Types.String,
});

let StandardModules = mongoose.model("standards", StandardDetails);

module.exports = StandardModules;
