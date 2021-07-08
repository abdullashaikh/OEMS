const StudentModel = require("../../model/student.model");
const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");

module.exports.create = async (data) => {
  var { name, email, password, profilePic, standardId } = data;
  let StudentData = { name, email, password, profilePic, standardId };
  var InsertData = new StudentModel(StudentData);
  return await InsertData.save()
    .then(async (data) => {
      return await response.success(
        ResponseConstant.STUDENT.CREATE_STUDENT_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return await response.error(
        ResponseConstant.STUDENT.CREATE_STUDENT_ERROR,
        { message: err }
      );
    });
};
