<script lang="ts">
  import {page} from "$app/stores";
  import videos from "../../routes/videos/videos-content";

  const findVideoPath = (video) => video.name.toLowerCase().replace(/\s/gi, '-');
  $: selected = videos.find(v => findVideoPath(v) === $page.params.name);
  $: withoutSelected = videos.filter(v => v !== selected);
</script>

<nav class="hasSelection">
  <ul>
    {#each videos as video (video.index)}
      <li class:selected={findVideoPath(video) === $page.params.name}>
        <a class="title" href={`/videos/${findVideoPath(video)}`}>
          <h3>{video.name}</h3>
        </a>
      </li>
    {/each}
  </ul>
  <h2>{selected.name}</h2>
</nav>

<style>
  nav {
    font-size: .8em;
  }
  h2 {
    font-family: Futura;
    text-transform: uppercase;
    color: white;
    font-size: 3em;
    letter-spacing: 1px;
    margin: 0 0 2em;
  }
  h3 {
    font-size: 1.5em;
    color: var(--color-text);
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
    pointer-events: none;
  }
  li.selected h3 {
    border-bottom: 2px solid #ccc;
  }
  li:hover {
    filter: brightness(75);
  }
  .title {
    padding: 0;
    display: block;
  }
</style>
