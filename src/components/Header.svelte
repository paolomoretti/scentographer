<script lang="ts">
  import {goto} from "$app/navigation";
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

  const goHome = () => goto('/');
  const goProject = () => goto('/the-project');

  const handleKeydown = (e) => {
    if (e.key === 'Escape' && compact) {
      goHome();
    }
  }

  onDestroy(() => clearInterval(intId));
</script>

<svelte:window on:keydown={handleKeydown}/>

<header class:compact>
  <div class="content">
    <a>
      <h1 on:click={goHome}>Scentographers</h1>
      <p class="payoff scent" on:click={goProject}>an attempt to record and archive scents</p>
    </a>
  </div>
  <div class="header-image" style={`background-image: url("${headerImage}")`} on:click={goHome}></div>
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
    cursor: pointer;
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
  header .content .payoff {
    color: var(--color-highlight);
    margin: 0;
    font-family: Futura;
    text-transform: uppercase;
    font-size: 3em;
    max-width: 272px;
    text-align: justify;
    line-height: 1em;
    text-align-last: justify;
  }
  .compact {
    min-height: 200px;
  }
  .compact .content .payoff {
    font-size: 1.9em;
  }
  .compact .header-image {
    height: 300%;
  }
  .compact .header-image .content {
    transform: translateX(-50%) translateY(-30%);
  }

  @media only screen and (max-width: 1200px) {
    header {
      min-height: 300px;
    }
  }
</style>
