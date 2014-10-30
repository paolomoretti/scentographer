stop = ->
  $("html").addClass "stop";

  setTimeout ->
    do $("iframe").remove
  , 1000


$("navigation li a").on "click", (event)->
  link = $(event.currentTarget)

  if link.next().is "p"
    $("html").toggleClass "with-overlay"
    $(event.currentTarget).parents("li:first").toggleClass "active"
    $(event.currentTarget).parents("navigation").toggleClass $(event.currentTarget).text()

    if $(event.currentTarget).parents("li:first").is ".active"

      setTimeout ->
        $("body").off("click").on "click", ->
          do $("navigation li.active a").click
          $("body").off "click"
      , 500

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