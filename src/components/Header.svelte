<script lang="ts">
  import videos from "../routes/videos/videos-content";
  import {onDestroy} from "svelte";

  export let compact = false;
  let headerImage = videos[videos.length - 4].cover;
  $: lastVideo = videos[0];
  $: otherVideos = [...videos].splice(1);

  const intId = setInterval(() => {
    const imgIndex = videos.map(v => v.cover).indexOf(headerImage);
    if (imgIndex === videos.length - 1) {
      headerImage = videos[0].cover;
    } else {
      headerImage = videos[imgIndex + 1].cover;
    }
  }, 10000);

  onDestroy(() => clearInterval(intId));
</script>

<header class:compact>
    <div class="content">
      <a href="/">
        <h1>Scentographers</h1>
        <p>an attempt to record and archive scents</p>
      </a>
    </div>
    <div class="header-image" style={`background-image: url("${headerImage}")`}></div>
</header>

<style>
  header {
    position: relative;
    min-height: 400px;
  }
  header .header-image {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    height: 120%;
    width: 100%;
    background: teal url(/images/smell-5.jpg) no-repeat center center;
    background-size: cover;
    transition: background-image 3s ease-in-out;
    opacity: .7;
  }
  header .content {
    font-family: Futura;
    text-align: center;
    margin: 0;
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
  header .content h1 {
    color: white;
    font-size: 3em;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  header .content p {
    color: white;
    font-style: italic;
    opacity: .8;
    font-size: .93em;
    margin: 0;
  }
  .compact {
    min-height: 200px;
  }
  .compact .header-image {
    height: 300%;
  }
  .compact .header-image .content {
    transform: translateX(-50%) translateY(-30%);
  }
</style>
