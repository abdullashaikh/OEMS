const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const ExamModel = require("../../model/exam.model");

module.exports.getOne = async (id) => {
  return await ExamModel.findById(id)
    .then(async (data) => {
      return response.success(ResponseConstant.EXAM.GET_ONE_EXAM_SUCCESS, data);
    })
    .catch(async (err) => {
      return response.error(ResponseConstant.EXAM.GET_ONE_EXAM_ERROR, {
        message: err,
      });
    });
};
