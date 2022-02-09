<script>
  import App from "../components/App.svelte";
  import MainNavigation from "../components/navigations/MainNavigation.svelte";
  import FullContent from "../components/FullContent.svelte";
  import videos from "./videos/videos-content";
</script>

<App>
  <MainNavigation />
  <FullContent>
    <div class="videos-container">
      {#each videos as video (video.index)}
        <div class="video">
          <a href={`/videos/${video.name.toLowerCase().replace(/\s/gi, '-')}`}>
            <h3 class="title">
              {video.name} <small>({video.year})</small>
              {#if video.just_added}
                <span class="just-added">New</span>
              {/if}
            </h3>
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
  .video {
    width: 50%;
    padding: 0 calc(var(--size-app-padding) / 4) calc(var(--size-app-padding) / 2);
  }
  .video a {
    background-color: white;
    display: block;
    position: relative;
    box-shadow: 0 0 19px #333;
    transition: transform, .3s;
  }
  .video:hover a {
    transform: rotate(1.4deg);
  }
  .video:nth-child(2):hover a {
    transform: rotate(-.4deg);
  }
  .video:hover a {
    transform: rotate(1.4deg);
  }
  .video:hover a {
    transform: rotate(1.4deg);
  }
  .video a h3 {
    margin: 0;
    padding: 1em;
    color: var(--color-text);
  }
  .video img {
    width: 100%;
    display: block;
  }
  .title {
    position: relative;
  }
  .title .just-added {
    position: absolute;
    top: 50%;
    right: 1em;
    transform: translateY(-50%);
    font-family: Helvetica;
    background-color: red;
    width: 35px;
    height: 35px;
    border-radius: 35px;
    line-height: 35px;
    vertical-align: middle;
    font-size: 9px;
    color: white;
    text-align: center;
    font-weight: bold;
    border: 2px dotted white;
    box-sizing: content-box;
  }
  .title small {
    opacity: .5;
  }

  @media only screen and (max-width: 800px) {
    .video {
      width: 100%;
    }
  }
</style>
