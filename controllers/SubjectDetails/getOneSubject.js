const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const SubjectModel = require("../../model/subject.model");

module.exports.getOne = async (id) => {
  return await SubjectModel.find({ standardId: id })
    .then(async (data) => {
      return response.success(
        ResponseConstant.SUBJECT.GET_ONE_SUBJECT_SUCCESS,
        data
      );
    })
    .catch(async (err) => {
      return response.error(ResponseConstant.SUBJECT.GET_ONE_SUBJECT_ERROR, {
        message: err,
      });
    });
};
