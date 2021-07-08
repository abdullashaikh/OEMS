const mongoose = require("../config/mongo-connection");
const Schema = mongoose.Schema;

const ExamDetails = mongoose.Schema({
  examName: Schema.Types.String,
  examDateAndTime: Schema.Types.Date,
  examTotalScore: Schema.Types.Number,
  examPassingScore: Schema.Types.Number,
  standardId: {
    type: Schema.Types.ObjectId,
    ref: "standards",
  },
  subjectId: {
    type: Schema.Types.ObjectId,
    ref: "subjects",
  },
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: "teachers",
  },
});

let ExamModel = mongoose.model("exams", ExamDetails);

module.exports = ExamModel;
