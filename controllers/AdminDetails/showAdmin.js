const AdminModel = require("../../model/admin.model");
const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");

module.exports.get = async () => {
  return await AdminModel.find()
    .then(async (data) => {
      return await response.success(
        ResponseConstant.ADMIN.GET_ALL_ADMIN_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return await response.error(ResponseConstant.ADMIN.GET_ALL_ADMIN_ERROR, {
        message: err,
      });
    });
};
