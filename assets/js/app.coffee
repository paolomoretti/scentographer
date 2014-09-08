stop = ->
  $("html").addClass "stop";

  setTimeout ->
    do $("iframe").remove
  , 1000


$("navigation li a").on "click", (event)->
  $("html").toggleClass "with-overlay"
  $(event.currentTarget).parents("li:first").toggleClass "active"
  $(event.currentTarget).parents("navigation").toggleClass $(event.currentTarget).text()

$(document).ready ->
  if $("html").is ".index"

    setTimeout ->
      $("#main-region").addClass "show"

      setTimeout ->
        $("html").addClass "loaded"
      , 2000

      setTimeout ->
        $("navigation").css
          opacity: 1;
      , 3000
    , 1500