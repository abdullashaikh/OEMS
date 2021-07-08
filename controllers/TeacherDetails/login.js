const TeacherModel = require("../../model/teacher.model");
const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const JWT = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_TOKEN;
module.exports.getOne = async (data) => {
  return await TeacherModel.find({ email: data.email, password: data.password })
    .then(async (data) => {
      let token;
      // console.log(data[0].token);
      if (data[0].token == "null") {
        // console.log("create");
        token = JWT.sign(
          {
            id: data[0]._id,
            name: data[0].name,
          },
          JWT_SECRET
        );
        // console.log(data[0]._id);
        TeacherModel.findByIdAndUpdate(
          data[0]._id,
          { token: token },
          function (err, doc) {
            if (err) {
              console.log(err.message);
            }
            // return res.send("Succesfully saved.");
          }
        );
      } else {
        // console.log("already have it");
        token = data[0].token;
      }

      //token to Data
      // const user = JWT.verify(token, JWT_SECRET);
      // console.log(user.id);

      return await response.success(
        ResponseConstant.TEACHER.GET_ONE_TEACHER_SUCCESS,
        token
      );
    })
    .catch(async (err) => {
      return await response.error(
        ResponseConstant.TEACHER.GET_ONE_TEACHER_ERROR,
        {
          message: err.message,
        }
      );
    });
};
