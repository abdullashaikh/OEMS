const StandardModel = require("../../model/standard.model");
const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");

module.exports.get = async () => {
  return await StandardModel.find()
    .then(async (data) => {
      return await response.success(
        ResponseConstant.STANDARD.GET_ALL_STANDARD_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return await response.error(
        ResponseConstant.STANDARD.GET_ALL_STANDARD_ERROR,
        { message: err }
      );
    });
};
