const ResponseConstant = require("../../constants/response.constants");
const TeacherModel = require("../../model/teacher.model");
const response = require("../../response.maker");

module.exports.delete = async (id) => {
  return await TeacherModel.findByIdAndDelete(id)
    .then(async (data) => {
      return await response.success(
        ResponseConstant.TEACHER.DELETE_TEACHER_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      response.error(ResponseConstant.TEACHER.DELETE_TEACHER_ERROR, {
        message: err,
      });
    });
};
