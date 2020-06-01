var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var batchRouter = require('./routes/batch_routes');
var subjectRouter = require('./routes/subject_routes');
var tagRouter = require('./routes/tag_routes');
var batchresult=require('./models/result_batchwise_admin');
var questionRouter = require('./routes/question_router');
var examRouter = require('./routes/exam_routes');
var examRouter1 = require('./routes/exam_routes1');
var examRouter2 = require('./routes/exam_routes2');
var questionPaperRouter = require('./routes/question_paper_routes');
var student_exam = require('./routes/student_exam_routes');
var student_answer = require('./routes/student_answer_routes');
var result = require('./routes/result_routes');
var student = require('./routes/student_routes');
var questionRouter1 = require('./routes/question_routes1');
var questionRouter2 = require('./routes/question_router2');
var feesRouter=require('./routes/fee_routes');
var attendence_Router=require('./routes/attendence_routes');
var announcement_Router=require('./routes/announcement_routes');
var email_Router=require('./routes/email_routes');
var student_Router1=require('./routes/student_routes1');
var viewQuestionPaper=require('./routes/question_paperView_routes_admin');
var attendanceRouter_admin=require('./routes/attendance_routes_admin');
var barchart1Router_admin=require('./routes/barchart1_routes_admin');
var barchart2Router_admin=require('./routes/barchat2_routes_admin');
var batchRouter_admin = require('./routes/batch_routes_admin');
var subjectRouter_admin = require('./routes/subject_routes_admin');
var tagRouter_admin = require('./routes/tag_routes_admin');
var tagRouter1_admin=require('./routes/tag_routes1_admin');
var todoRouter_admin=require('./routes/todo_routes_admin');
var todo_delete_router_admin=require('./routes/todo_del_routes_admin');
var questionRouter_admin = require('./routes/question_router_admin');
var getallQuestionRouter_admin=require('./routes/question_routes1_admin');
var getQuestionByFacultyRouter_admin=require('./routes/questionByfaculty_routes_admin');
var examRouter_admin = require('./routes/exam_routes_admin');
var questionPaperRouter_admin = require('./routes/question_paper_routes_admin');
var student_exam_admin = require('./routes/student_exam_routes_admin');
var student_answer_admin = require('./routes/student_answer_routes_admin');
var student_login_admin=require('./routes/student_routes_admin');
var student_admin=require('./routes/student_routes1_admin');
var student_del_admin=require('./routes/student_delete_routes_admin');
var exam_by_batch_admin=require('./routes/exambyBatch_id_routes_admin');
var faculty_login_admin=require('./routes/faculty_routes_admin');
var announcement_admin=require('./routes/announce_routes_admin');
var announce_del_admin=require('./routes/announcement_del_routes_admin');
var faculty_admin=require('./routes/faculty_routes1_admin');
var faculty_del_admin=require('./routes/faculty_delete_routes_admin');
var subject_delete_admin=require('./routes/subject_delete_routes_admin');
var fees_admin=require('./routes/fees_routes_admin');
var batch_delete_admin=require('./routes/batch_del_routes_admin');
var question1_admin=require('./routes/question_routes2_admin');
var transaction_admin=require('./routes/transaction_routes_admin');
var salaryinfo_routes_admin=require('./routes/salaryInfo_routes_admin');
var dashboardstudent_admin=require('./routes/dashboard_student_routes_admin');
var dashboardquestion_admin=require('./routes/dashboard_question_routes_admin');
var dashboardfaculty_admin=require('./routes/dashboard_faculty_routes_admin');
var dashboardbatch_admin=require('./routes/dashboard_batch_routes_admin');
var dashboardperformace_admin=require('./routes/dashboard_performance_routes_admin');
var linechart_admin=require('./routes/linechart_routes_admin');
var status_date=require('./routes/attendence_status_routes');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/batch',batchRouter);
app.use('/subject',subjectRouter);
app.use('/tag',tagRouter);
app.use('/status',status_date);
app.use('/batch_result',batchresult);
app.use('/question',questionRouter);
app.use('/question1',questionRouter1);
app.use('/question2',questionRouter2);
app.use('/viewQuestionPaper',viewQuestionPaper);
app.use('/exam',examRouter);
app.use('/exam1',examRouter1);
app.use('/exam2',examRouter2);
app.use('/question_paper',questionPaperRouter);
app.use('/student_exam',student_exam);
app.use('/student_answer',student_answer);
app.use('/result',result);
app.use('/student',student);
app.use('/fee',feesRouter);
app.use('/attendence',attendence_Router);
app.use('/announcement',announcement_Router);
app.use('/email',email_Router);
app.use('/student1',student_Router1);

app.use('/linechart_admin',linechart_admin);
app.use('/barchart1Router_admin',barchart1Router_admin);
app.use('/barchart2Router_admin',barchart2Router_admin);
app.use('/dashboardfaculty_admin',dashboardfaculty_admin);
app.use('/dashboardquestion_admin',dashboardquestion_admin);
app.use('/dashboardperformance_admin',dashboardperformace_admin);
app.use('/dashboardbatch_admin',dashboardbatch_admin);
app.use('/dashboardstudent_admin',dashboardstudent_admin);
app.use('/faculty_login_admin',faculty_login_admin);
app.use('/transaction_admin',transaction_admin);
app.use('/faculty_admin',faculty_admin);
app.use('/salaryinfo_admin',salaryinfo_routes_admin);
app.use('/faculty_del_admin',faculty_del_admin);
app.use('/fees_admin',fees_admin);

app.use('/batch_admin',batchRouter_admin);
app.use('/subject_admin',subjectRouter_admin);
app.use('/subject_del_admin',subject_delete_admin);
app.use('/batch_del_admin',batch_delete_admin);
app.use('/tag_admin',tagRouter_admin);
app.use('/tag1_admin',tagRouter1_admin);
app.use('/todo_admin',todoRouter_admin);
app.use('/todo_del_admin',todo_delete_router_admin);
app.use('/question_admin',questionRouter_admin);
app.use('/questionBank_admin',getallQuestionRouter_admin);
app.use('/question1_admin',question1_admin);
app.use('/facultyQuestions_admin',getQuestionByFacultyRouter_admin)
app.use('/exam_admin',examRouter_admin);
app.use('/question_paper_admin',questionPaperRouter_admin);
app.use('/student_exam_admin',student_exam_admin);
app.use('/student_answer_admin',student_answer_admin);
app.use('/exambybatch_admin',exam_by_batch_admin);
app.use('/student_login_admin',student_login_admin);
app.use('/student_admin',student_admin);
app.use('/student_del_admin',student_del_admin);
app.use('/announcement_admin',announcement_admin);
app.use('/announcement_del_admin',announce_del_admin);
app.use('/attendance_admin',attendanceRouter_admin);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
