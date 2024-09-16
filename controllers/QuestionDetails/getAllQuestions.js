const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const QuestionModel = require("../../model/questions.model");

module.exports.get = async () => {
  return await QuestionModel.find()
    .then(async (data) => {
      return response.success(
        ResponseConstant.QUESTION.GET_ALL_QUESTION_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return response.error(ResponseConstant.QUESTION.GET_ALL_QUESTION_ERROR, {
        message: err,
      });
    });
};
