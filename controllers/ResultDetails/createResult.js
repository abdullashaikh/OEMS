const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const ResultModel = require("../../model/result.model");

module.exports.create = async (data) => {
  var { obtainScore, status, examId, studentId } = data;
  var ResultData = { obtainScore, status, examId, studentId };
  var InsertResultData = new ResultModel(ResultData);
  return await InsertResultData.save()
    .then(async () => {
      return await response.success(
        ResponseConstant.RESULT.CREATE_RESULT_SUCCESS,
        ResultData
      );
    })
    .catch(async (err) => {
      return await response.error(ResponseConstant.RESULT.CREATE_RESULT_ERROR, {
        message: err,
      });
    });
};
