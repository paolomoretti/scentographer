stop = ->
  $("html").addClass "stop";

  setTimeout ->
    do $("iframe").remove
  , 1000


$(document).ready ->
  if $("html").is ".index"
    console.log "----"
    $("#main-region").css "opacity", 1

    setTimeout ->
      $("header").css
        top     : "20px"
        left    : "125px"
        color   : "#333"
    , 2000