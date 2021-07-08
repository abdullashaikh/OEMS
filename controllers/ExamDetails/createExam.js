const ResponseConstant = require("../../constants/response.constants");
const response = require("../../response.maker");
const ExamModel = require("../../model/exam.model");

module.exports.create = async (data) => {
  var {
    examName,
    examDateAndTime,
    examTotalScore,
    passingScore,
    standardId,
    subjectId,
    teacherId,
  } = data;
  var ExamData = {
    examName,
    examDateAndTime,
    examTotalScore,
    passingScore,
    standardId,
    subjectId,
    teacherId,
  };
  var InsertExamData = new ExamModel(ExamData);
  return await InsertExamData.save()
    .then(async () => {
      return await response.success(
        ResponseConstant.EXAM.CREATE_EXAM_SUCCESS,
        ExamData
      );
    })
    .catch(async (err) => {
      return await response.error(ResponseConstant.EXAM.DELETE_EXAM_ERROR, {
        message: err,
      });
    });
};
