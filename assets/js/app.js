// Generated by CoffeeScript 1.6.3
var stop;

stop = function() {
  $("html").addClass("stop");
  return setTimeout(function() {
    return $("iframe").remove();
  }, 1000);
};
