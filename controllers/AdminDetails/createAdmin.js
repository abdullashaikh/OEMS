const AdminModel = require("../../model/admin.model");
const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");

module.exports.create = async (data) => {
  // console.log(data);
  var { name, email, password, profilePic } = data;
  // console.log(name);
  let adminData = { name, email, password, profilePic };
  var insertData = new AdminModel(adminData);
  return await insertData
    .save()
    .then(async () => {
      return await response.success(
        ResponseConstant.ADMIN.CREATE_ADMIN_SUCCESS,
        adminData
      );
    })
    .catch(async (err) => {
      return await response.error(ResponseConstant.ADMIN.CREATE_ADMIN_ERROR, {
        message: err,
      });
    });
};
