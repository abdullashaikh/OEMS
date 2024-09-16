const TeacherModel = require("../../model/teacher.model");
const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");

module.exports.create = async (data) => {
  // console.log(data);
  var { name, email, password, profilePic } = data;
  // console.log(name);
  let TeacherData = { name, email, password, profilePic };
  var insertData = new TeacherModel(TeacherData);
  return await insertData
    .save()
    .then(async () => {
      return await response.success(
        ResponseConstant.TEACHER.CREATE_TEACHER_SUCCESS,
        TeacherData
      );
    })
    .catch(async (err) => {
      return await response.error(
        ResponseConstant.TEACHER.CREATE_TEACHER_ERROR,
        {
          message: err,
        }
      );
    });
};
