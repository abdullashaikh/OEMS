const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const QuestionModel = require("../../model/questions.model");

module.exports.delete = async (id) => {
  console.log(id);
  return QuestionModel.findByIdAndDelete(id)
    .then(async (data) => {
      return response.success(
        ResponseConstant.QUESTION.DELETE_QUESTION_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return response.error(ResponseConstant.QUESTION.DELETE_QUESTION_ERROR, {
        message: err,
      });
    });
};
