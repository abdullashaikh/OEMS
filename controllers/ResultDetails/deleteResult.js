const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const ResultModel = require("../../model/result.model");

module.exports.delete = async (id) => {
  console.log(id);
  return ResultModel.findByIdAndDelete(id)
    .then(async (data) => {
      return response.success(
        ResponseConstant.RESULT.DELETE_RESULT_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return response.error(ResponseConstant.RESULT.DELETE_RESULT_ERROR, {
        message: err,
      });
    });
};
