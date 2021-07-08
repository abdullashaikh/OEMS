const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const StudentModel = require("../../model/student.model");

module.exports.get = async () => {
  return await StudentModel.find()
    .then(async (data) => {
      return response.success(
        ResponseConstant.STUDENT.GET_ALL_STUDENT_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return response.error(ResponseConstant.STUDENT.GET_ALL_STUDENT_ERROR, {
        message: err,
      });
    });
};
