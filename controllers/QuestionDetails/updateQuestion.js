const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const QuestionModel = require("../../model/questions.model");

module.exports.update = async (data) => {
  var body = data;
  let QuestionData = {
    ...body,
  };
  return await QuestionModel.findByIdAndUpdate(body.id, QuestionData)
    .then(async (data) => {
      return response.success(
        ResponseConstant.QUESTION.UPDATE_QUESTION_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return response.error(ResponseConstant.QUESTION.UPDATE_QUESTION_ERROR, {
        message: err,
      });
    });
};
