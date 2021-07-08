const mongoose = require("../config/mongo-connection");
const Schema = mongoose.Schema;

const TeacherDetails = mongoose.Schema({
  name: Schema.Types.String,
  email: Schema.Types.String,
  password: Schema.Types.String,
  profilePic: Schema.Types.String,
  token: Schema.Types.String,
});

let TeacherModule = mongoose.model("teachers", TeacherDetails);

module.exports = TeacherModule;
