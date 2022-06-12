const express = require('express');
const morgan = require('morgan');
const path = require('path');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(morgan('dev'));
app.set('port', process.env.PORT || 8080);
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

app.use('/', require('./routes'));

console.log('hello');

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});