const ResponseConstant = require("../../constants/response.constants");
const TeacherModel = require("../../model/teacher.model");
const response = require("../../response.maker");

module.exports.update = async (data) => {
  var body = data;
  let TeacherData = {
    ...body,
  };

  return await TeacherModel.findByIdAndUpdate(body.id, TeacherData)
    .then(async (data) => {
      return await response.success(
        ResponseConstant.TEACHER.UPDATE_TEACHER_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return await response.error(
        ResponseConstant.TEACHER.UPDATE_TEACHER_ERROR,
        {
          message: err,
        }
      );
    });
};
