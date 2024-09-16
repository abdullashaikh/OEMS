const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const ExamModel = require("../../model/exam.model");

module.exports.update = async (data) => {
  var body = data;
  let ExamData = {
    ...body,
  };
  return await ExamModel.findByIdAndUpdate(body.id, ExamData)
    .then(async (data) => {
      return response.success(ResponseConstant.EXAM.UPDATE_EXAM_SUCCESS, data);
    })
    .catch(async (err) => {
      return response.error(ResponseConstant.EXAM.UPDATE_EXAM_ERROR, {
        message: err,
      });
    });
};
