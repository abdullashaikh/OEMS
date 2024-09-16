const AdminModel = require("../../model/admin.model");
const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");

module.exports.getOne = async (data) => {
  return await AdminModel.find({ email: data.email, password: data.password })
    .then(async (data) => {
      return await response.success(
        ResponseConstant.ADMIN.GET_ONE_ADMIN_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return await response.error(ResponseConstant.ADMIN.GET_ONE_ADMIN_ERROR, {
        message: err,
      });
    });
};
