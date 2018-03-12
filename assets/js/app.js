// var player;
//
// function onYouTubeIframeAPIReady() {
//
//   $(document).ready(function () {
//     player = new YT.Player("yt_player", {
//       height: "100%",
//       width: "100%",
//       videoId: "BM_dJaohniA",
//       events: {
//         onReady: onPlayerReady,
//         onStateChange: onPlayerStateChange
//       }
//     })
//   })
// }
//
// function onPlayerReady (event) {
//   startVideo = function () {
//     player.playVideo();
//     player.setVolume(100);
//   }
// }
//
// function onPlayerStateChange (event) {
//   console.log ("onPlayerStateChange", event);
// }
//
//
// function startVideo () {
//   setTimeout(function () {
//     startVideo();
//   }, 300);
// }
//
// setTimeout(function () {
//   $(".slide-1").addClass("show");
//
//   setTimeout(function () {
//     $(".slide-1").removeClass("show");
//     $(".video-player").css("opacity", 1);
//
//     setTimeout(function () {
//       $(".container").remove();
//     }, 2000);
//
//   }, 3000);
// }, 500);

var style = document.createElement('link');
style.href = "https://fonts.googleapis.com/css?family=Barlow+Condensed";
style.rel = "stylesheet";

document.head.appendChild(style);
