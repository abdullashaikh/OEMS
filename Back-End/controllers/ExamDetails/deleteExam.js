const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const ExamModel = require("../../model/exam.model");

module.exports.delete = async (id) => {
  return ExamModel.findByIdAndDelete(id)
    .then(async (data) => {
      return response.success(ResponseConstant.EXAM.DELETE_EXAM_SUCCESS, data);
    })
    .catch(async (err) => {
      return response.error(ResponseConstant.EXAM.DELETE_EXAM_ERROR, {
        message: err,
      });
    });
};
