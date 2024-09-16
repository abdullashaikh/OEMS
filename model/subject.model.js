const mongoose = require("../config/mongo-connection");
const Schema = mongoose.Schema;

const SubjectDetails = mongoose.Schema({
  name: Schema.Types.String,
  desc: Schema.Types.String,
  standardId: {
    type: Schema.Types.ObjectId,
    ref: "standards",
  },
});

let SubjectModel = mongoose.model("subjects", SubjectDetails);

module.exports = SubjectModel;
