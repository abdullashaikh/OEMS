const mongoose = require("../config/mongo-connection");
const Schema = mongoose.Schema;

const ResultDetails = mongoose.Schema({
  obtainScore: Schema.Types.Number,
  status: Schema.Types.String,
  examId: {
    type: Schema.Types.ObjectId,
    ref: "exams",
  },
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "students",
  },
});

let ResultModel = mongoose.model("results", ResultDetails);

module.exports = ResultModel;
