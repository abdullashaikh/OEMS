const mongoose = require("../config/mongo-connection");
const Schema = mongoose.Schema;

const QuestionType = mongoose.Schema({
  questionTypeName: Schema.Types.String,
  numberOfOptions: Schema.Types.Integer,
});

let QuestionModel = mongoose.model("question_types", QuestionType);

module.exports = QuestionModel;
