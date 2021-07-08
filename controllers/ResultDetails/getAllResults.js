const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const ResultModel = require("../../model/result.model");

module.exports.get = async () => {
  return await ResultModel.find()
    .then(async (data) => {
      return response.success(
        ResponseConstant.RESULT.GET_ALL_RESULT_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return response.error(ResponseConstant.RESULT.GET_ALL_RESULT_ERROR, {
        message: err,
      });
    });
};
