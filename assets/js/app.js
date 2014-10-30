// Generated by CoffeeScript 1.6.3
var stop;

stop = function() {
  $("html").addClass("stop");
  return setTimeout(function() {
    return $("iframe").remove();
  }, 1000);
};

$("navigation li a").on("click", function(event) {
  var link;
  link = $(event.currentTarget);
  if (link.next().is("p")) {
    $("html").toggleClass("with-overlay");
    $(event.currentTarget).parents("li:first").toggleClass("active");
    $(event.currentTarget).parents("navigation").toggleClass($(event.currentTarget).text());
    if ($(event.currentTarget).parents("li:first").is(".active")) {
      return setTimeout(function() {
        return $("body").off("click").on("click", function() {
          $("navigation li.active a").click();
          return $("body").off("click");
        });
      }, 500);
    }
  }
});

$(document).ready(function() {
  if ($("html").is(".index")) {
    return setTimeout(function() {
      $("#main-region").addClass("show");
      setTimeout(function() {
        return $("html").addClass("loaded");
      }, 2000);
      return setTimeout(function() {
        return $("navigation").css({
          opacity: 1
        });
      }, 3000);
    }, 1500);
  }
});