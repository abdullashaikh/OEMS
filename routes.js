module.exports = function (app) {
  var Admin = require("./controllers/AdminDetails/adminDetails");
  var Student = require("./controllers/StudentDetails/studentDetails");
  var Teacher = require("./controllers/TeacherDetails/teacherDetails");
  var Exams = require("./controllers/ExamDetails/examDetails");
  var Question = require("./controllers/QuestionDetails/questionDetails");
  var Result = require("./controllers/ResultDetails/resultDetails");
  var Subject = require("./controllers/SubjectDetails/SubjectDetails");
  var Standard = require("./controllers/StandardDetails/standardDetails");
  app
    .route("/admin/:id?")
    .get(Admin.get)
    .put(Admin.create)
    .post(Admin.update)
    .delete(Admin.delete);
  app.route("/login/admin/:id?").post(Admin.getOne);
  app
    .route("/student/:id?")
    .put(Student.create)
    .delete(Student.delete)
    .get(Student.get)
    .post(Student.update);
  app.route("/login/student/:id?").post(Student.getOne);

  app
    .route("/teacher/:id?")
    .put(Teacher.create)
    .delete(Teacher.delete)
    .get(Teacher.get)
    .post(Teacher.update);
  app.route("/login/teacher/:id?").post(Teacher.getOne);

  app
    .route("/exam/:id?")
    .put(Exams.create)
    .get(Exams.get)
    .delete(Exams.delete)
    .post(Exams.update);

  app
    .route("/question/:id?")
    .put(Question.create)
    .delete(Question.delete)
    .get(Question.get)
    .post(Question.update);

  app
    .route("/result/:id?")
    .put(Result.create)
    .delete(Result.delete)
    .get(Result.get);
  app.route("/subject/:id?").put(Subject.create).get(Subject.getOne);
  app.route("/standard/:id?").put(Standard.create).get(Standard.get);
};
