const ResponseConstant = require("../../constants/response.constants");
const AdminModel = require("../../model/admin.model");
const response = require("../../response.maker");

module.exports.delete = async (id) => {
  return await AdminModel.findByIdAndDelete(id)
    .then(async (data) => {
      return await response.success(
        ResponseConstant.ADMIN.DELETE_ADMIN_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      response.error(ResponseConstant.ADMIN.DELETE_ADMIN_ERROR, {
        message: err,
      });
    });
};
