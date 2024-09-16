const TeacherModel = require("../../model/teacher.model");
const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const JWT = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_TOKEN;
module.exports.get = async (id) => {
  console.log(id);
  // token to Data
  const user = JWT.verify(id, JWT_SECRET);
  console.log(user);

  return await TeacherModel.findById(user.id)
    .then(async (data) => {
      return await response.success(
        ResponseConstant.TEACHER.GET_ALL_TEACHER_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return await response.error(
        ResponseConstant.TEACHER.GET_ALL_TEACHER_ERROR,
        {
          message: err,
        }
      );
    });
};
