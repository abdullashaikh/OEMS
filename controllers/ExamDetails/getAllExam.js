const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const ExamModel = require("../../model/exam.model");

module.exports.get = async () => {
  return await ExamModel.find()
    .then(async (data) => {
      return response.success(ResponseConstant.EXAM.GET_ALL_EXAM_SUCCESS, data);
    })
    .catch(async (err) => {
      return response.error(ResponseConstant.EXAM.GET_ALL_EXAM_ERROR, {
        message: err,
      });
    });
};
