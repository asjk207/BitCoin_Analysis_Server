var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const router = express.Router();

var loginDB=require('./components/loginDB');
var getPrice = require('./components/getPrice');
var ch_bn_Router = require('./routes/ch_bn_price');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bn_pri_sc = require('./components/model/bn_price_schema');

var app = express();


console.log("app_start");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//cors 모듈 추가 (2021-05-14) -> Client에서 api호출시 ERR:FAILD 발생으로 추가.
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use('./routes/ch_bn_price',chbnRouter);


//binance_bitcoin 정보 불러오는 기능. (2021-05-17)
//var ch_data = bn_pri_sc;
app.get('/ch_bn_price', (req, res) => {
  bn_pri_sc.find({}).exec()
    .then((result) => {
      return res.json(result);
      //console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
  //return res.json(users);
});


// 화면 engine을 ejs로 설정
/*app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);

//api 페이지 라우팅
router.get('/',(req, res) => {
    console.log('http://localhost:3001/api/');
    res.send({title:'Hello Node_API'});
});
*/
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  console.log(err);
  // render the error page
  // res.status(err.status || 500);
  // res.render('error');
});


module.exports = app;
