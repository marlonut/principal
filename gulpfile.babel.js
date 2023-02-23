const babel=require("gulp-babel")
const gulp=require('gulp') ;
const  {dist,dest,task,watch,series}=require("gulp")
const pug=require("gulp-pug");
const production=false;
const sass=require('gulp-sass')(require('sass'))

task("views",()=>{
  return gulp.src("./src/views/pages/*.pug")
    .pipe(pug({pretty:production?false:true}))
    .pipe(dest("./docs/"))
})
task("sass",()=>{
  return gulp.src("./src/scss/styles.scss")
  // {outputStyle:"compressed"}
  .pipe(sass()).on('error', sass.logError)
  .pipe(dest("./docs/css"))
})
task("default",()=>{
  watch("./src/views/**/*.pug",gulp.series("views"))
  watch("./src/scss/**/*.scss",gulp.series("sass"))
})