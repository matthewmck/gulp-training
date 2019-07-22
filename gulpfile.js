const gulp = require("gulp");

// Logs Message
gulp.task("message", function() {
  return console.log("Gulp is running");
});

// Copy all HTML files
gulp.task("copyHTML", function() {
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
});
