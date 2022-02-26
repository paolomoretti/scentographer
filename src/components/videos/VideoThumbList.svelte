<script lang="ts">
  import VideoThumb from "./VideoThumb.svelte";

  export let videos: Array<VideoContent>;
</script>

<div class="videos-list">
  {#each videos as video (video.index)}
    <VideoThumb video={video} />
  {/each}
</div>

<style>
  .videos-list {
    display: flex;;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5em;
    padding: 0 1.5em;
  }
</style>
