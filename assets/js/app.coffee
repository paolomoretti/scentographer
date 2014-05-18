stop = ->
  $("html").addClass "stop";

  setTimeout ->
    do $("iframe").remove
  , 1000