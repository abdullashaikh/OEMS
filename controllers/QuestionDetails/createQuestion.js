const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const QuestionModel = require("../../model/questions.model");

module.exports.create = async (data) => {
  var { questionText, options, currectAnswer, scorePerQuestion, examId } = data;
  var QuestionData = {
    questionText,
    options,
    currectAnswer,
    scorePerQuestion,
    examId,
  };
  var InsertQuestionData = new QuestionModel(QuestionData);
  return await InsertQuestionData.save()
    .then(async () => {
      return await response.success(
        ResponseConstant.QUESTION.CREATE_QUESTION_SUCCESS,
        QuestionData
      );
    })
    .catch(async (err) => {
      return await response.error(
        ResponseConstant.QUESTION.CREATE_QUESTION_ERROR,
        {
          message: err,
        }
      );
    });
};
