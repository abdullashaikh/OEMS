const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const StudentModel = require("../../model/student.model");

module.exports.update = async (data) => {
  var body = data;
  let StudentData = {
    ...body,
  };
  return await StudentModel.findByIdAndUpdate(body.id, StudentData)
    .then(async (data) => {
      return await response.success(
        ResponseConstant.STUDENT.UPDATE_STUDENT_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      response.error(ResponseConstant.STUDENT.UPDATE_STUDENT_ERROR, {
        message: err,
      });
    });
};
