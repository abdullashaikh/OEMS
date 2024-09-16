const mongoose = require("../config/mongo-connection");
const Schema = mongoose.Schema;

const AdminDetails = mongoose.Schema({
  name: Schema.Types.String,
  email: Schema.Types.String,
  // loginToken: [Schema.Types.String],
  password: Schema.Types.String,
  profilePic: Schema.Types.String,
});

let AdminModel = mongoose.model("admins", AdminDetails);

module.exports = AdminModel;
