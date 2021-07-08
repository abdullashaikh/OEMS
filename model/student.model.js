const mongoose = require("../config/mongo-connection");
const Schema = mongoose.Schema;

const StudentDetails = mongoose.Schema({
  name: Schema.Types.String,
  email: Schema.Types.String,
  password: Schema.Types.String,
  profilePic: Schema.Types.String,
  standardId: {
    type: Schema.Types.ObjectId,
    ref: "standards",
  },
});

let StudentModel = mongoose.model("students", StudentDetails);

module.exports = StudentModel;
