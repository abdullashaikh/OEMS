const SubjectModel = require("../../model/subject.model");
const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");

module.exports.create = async (data) => {
  var { name, desc, standardId } = data;
  let SubjectData = { name, desc, standardId };
  var InsertData = SubjectModel(SubjectData);
  return await InsertData.save()
    .then(async () => {
      return await response.success(
        ResponseConstant.SUBJECT.CREATE_SUBJECT_SUCCESS,
        SubjectData
      );
    })
    .catch(async (err) => {
      return await response.error(
        ResponseConstant.SUBJECT.CREATE_SUBJECT_ERROR,
        { message: err }
      );
    });
};
