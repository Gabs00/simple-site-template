var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('start', function(){
  var port = 1337;
  var app = require('./express-basic-server');

  start(port, app);
});

gulp.task('compile-less', function(){
  var filepaths = {
    less: [ './less/*.less' ],
    includes: ['./bower_components/bootstrap/dist/less']
  };

  return compileLess( filepaths );
});

function start(port, app){
  app.listen(port, function(){
    console.log('listening on port', port);
  });
}

function compileLess(attrs){
  return gulp.src(attrs.less)
    .pipe(less({
      paths: attrs.includes 
    }))
    .pipe(gulp.dest('./src'));
}