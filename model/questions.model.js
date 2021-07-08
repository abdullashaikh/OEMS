const mongoose = require("../config/mongo-connection");
const Schema = mongoose.Schema;

const QuestionsDetail = mongoose.Schema({
  questionText: Schema.Types.String,
  options: Schema.Types.Array,
  currectAnswer: Schema.Types.String,
  scorePerQuestion: Schema.Types.Number,
  examId: {
    type: Schema.Types.ObjectId,
    ref: "exams",
  },
});

let QuestionModel = mongoose.model("questions", QuestionsDetail);

module.exports = QuestionModel;
