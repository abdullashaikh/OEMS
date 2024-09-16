const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const StudentModel = require("../../model/student.model");

module.exports.delete = async (id) => {
  return await StudentModel.findByIdAndDelete(id)
    .then(async (data) => {
      return response.success(
        ResponseConstant.STUDENT.DELETE_STUDENT_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return response.error(ResponseConstant.STUDENT.DELETE_STUDENT_ERROR, {
        message: err,
      });
    });
};
