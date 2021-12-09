<script lang="ts">
  import {page} from "$app/stores";
  import videos from "./videos-content";
  import App from "../../components/App.svelte";
  import MainNavigation from "../../components/navigations/MainNavigation.svelte";
  import FullContent from "../../components/FullContent.svelte";
  import VideosNavigation from "../../components/navigations/VideosNavigation.svelte";

  $: video = videos.find(v => v.name.toLowerCase().replace(/\s/gi, '-') === $page.params.name)
</script>

<App>
  <MainNavigation />
  <FullContent>
    <VideosNavigation />
    <div class="video-frame-container">
      <iframe id="yt_player" name="player" width="100%" height="100%" src={video.src} frameborder="0"></iframe>
      <p class="loader">loading...</p>
    </div>
    <p class="description">
{video.description}
    </p>
  </FullContent>
</App>

<style>
  .video-frame-container {
    position: relative;
    padding-top: 60%;
  }
  iframe {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  }
  .loader {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .description {
    white-space: pre-line
  }
</style>