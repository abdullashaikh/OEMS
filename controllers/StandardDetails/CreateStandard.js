const StandardModel = require("../../model/standard.model");
const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");

module.exports.create = async (data) => {
  var { name, desc } = data;
  let StandardData = { name, desc };
  var InsertData = StandardModel(StandardData);
  return await InsertData.save()
    .then(async () => {
      return await response.success(
        ResponseConstant.STANDARD.CREATE_STANDARD_SUCCESS,
        StandardData
      );
    })
    .catch(async (err) => {
      return await response.error(
        ResponseConstant.STANDARD.CREATE_STANDARD_ERROR,
        { message: err }
      );
    });
};
