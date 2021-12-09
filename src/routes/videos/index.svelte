<script lang="ts">
  import FullContent from "../../components/FullContent.svelte";
  import App from "../../components/App.svelte";
  import MainNavigation from "../../components/navigations/MainNavigation.svelte";

  import videos from "./videos-content";
</script>

<App>
  <MainNavigation />
  <FullContent>
    <div class="videos-container">
      {#each videos as video (video.index)}
        <div class="video">
          <a href={`/videos/${video.name.toLowerCase().replace(/\s/gi, '-')}`}>
            <h3 class="title">{video.name}</h3>
            <img src={video.cover} alt={video.name}>
          </a>
        </div>
      {/each}
    </div>
  </FullContent>
</App>

<style>
  .videos-container {
    display: flex;
    justify-content: stretch;
    max-width: var(--size-max-app-content);
    margin: 0 auto;
    flex-wrap: wrap;
  }
  .videos-container .video {
    width: 50%;
    min-width: 500px;
    padding-bottom: calc(var(--size-app-padding) / 2);
  }
  .videos-container .video:nth-child(odd) {
    padding-right: calc(var(--size-app-padding) / 4);
  }
  .videos-container .video:nth-child(even) {
    padding-left: calc(var(--size-app-padding) / 4);
  }
  .video img {
    width: 100%;
  }
</style>