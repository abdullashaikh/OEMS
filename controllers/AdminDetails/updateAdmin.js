const ResponseConstant = require("../../constants/response.constants");
const AdminModel = require("../../model/admin.model");
const response = require("../../response.maker");

module.exports.update = async (data) => {
  var body = data;
  let AdminData = {
    ...body,
  };

  return await AdminModel.findByIdAndUpdate(body.id, AdminData)
    .then(async (data) => {
      return await response.success(
        ResponseConstant.ADMIN.UPDATE_ADMIN_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return await response.error(ResponseConstant.ADMIN.UPDATE_ADMIN_ERROR, {
        message: err,
      });
    });
};
