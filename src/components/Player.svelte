<svelte:head>
  <script src="https://www.youtube.com/player_api"></script>
</svelte:head>

<script lang="ts">
  import {onMount} from "svelte";

  export let video: VideoContent;
  export let onClose: Function;

  const startVideo = () => {
    new YT.Player('ytplayer', {
      width: '100%',
      videoId: video.videoId,
      playerVars: {
        autoplay: 1,
        modestbranding: 1
      }
    });
    document.getElementById('ytplayer').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  window.onYouTubePlayerAPIReady = () => {
    window.YouTubePlayerAPIReady = true;
    startVideo();
  }

  onMount(() => {
    if (window.YouTubePlayerAPIReady === true) {
      startVideo();
    }
  })
</script>

<div class="video-frame-container">
  <div class="video-header">
    <a on:click={onClose}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7.58 0l5.988-5.995 1.414 1.416-4.574 4.579 4.574 4.59-1.414 1.416-5.988-6.006z"/></svg>
    </a>
    <h2 class="title video-name">{video.name}</h2>
  </div>
  <div id="ytplayer"></div>
</div>

<style>
  .video-frame-container {
    position: relative;
    padding-top: 60%;
  }
  .video-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10000;
    background: black;
    margin: 0;
    font-size: 1em;
    text-align: center;
    padding: 10px;
    display: flex;
    align-content: center;
  }
  .video-header a {
    flex: 1;
    display: inline-block;
    font-family: Helvetica;
  }
  .video-header a svg {
    fill: white;
  }
  .video-header .video-name {
    flex: 100;
    margin: 0;
    font-size: 1em;
    text-align: center;
  }
  #ytplayer {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }
</style>
