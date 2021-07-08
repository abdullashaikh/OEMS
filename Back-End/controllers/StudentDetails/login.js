const StudentModel = require("../../model/student.model");
const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");

module.exports.getOne = async (data) => {
  return await StudentModel.find({ email: data.email, password: data.password })
    .then(async (data) => {
      return response.success(
        ResponseConstant.STUDENT.GET_ONE_STUDENT_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return response.error(ResponseConstant.STUDENT.GET_ONE_STUDENT_ERROR, {
        message: err,
      });
    });
};
