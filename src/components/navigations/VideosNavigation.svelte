<script lang="ts">
  import {page} from "$app/stores";
  import videos from "../../routes/videos/videos-content";

  const findVideoPath = (video) => video.name.toLowerCase().replace(/\s/gi, '-');
  $: selected = videos.find(v => findVideoPath(v) === $page.params.name);
</script>

<nav class="hasSelection">
  <ul>
    {#each videos as video (video.index)}
      <li class:selected={findVideoPath(video) === $page.params.name}>
        <a class="title" href={`/videos/${findVideoPath(video)}`}>
          <h2>{video.name}</h2>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  nav {
    font-size: .8em;
  }
  ul {
    display: block;
  }
  li {
    display: inline-block;
    padding-right: calc(var(--size-app-padding) / 2);
    filter: brightness(50%);
  }
  li.selected {
    filter: none;
    font-size: 1.3em;
  }
  li:hover {
    filter: brightness(75);
  }
  .title {
    padding: 1.5em 0;
    display: block;
  }
  h2 {
    margin: 0;
  }
</style>