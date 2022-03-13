<script lang="ts">
  import {page} from "$app/stores";
  import videos from "./videos-content";
  import App from "../../components/App.svelte";
  import FullContent from "../../components/FullContent.svelte";
  import Header from "../../components/Header.svelte";
  import Player from "../../components/Player.svelte";
  import Footer from "../../components/Footer.svelte";

  let showVideo = false;
  $: video = videos.find(v => v.name.toLowerCase().replace(/\s/gi, '-') === $page.params.name) as VideoContent;

  const playVideo = () => showVideo = true;
  const onClose = () => showVideo = false;
</script>

<App>
<!--  <div>-->
    <Header compact={true} />
    {#if showVideo}
      <Player video={video} onClose={onClose} />
    {:else}
      <FullContent>
        <div class="video-content">
          <div class="content">
            <h2 class="title">{video.name}</h2>

            <h4 class="title sub-title">Our memories</h4>
            <p class="description">{video.memories}</p>

            <h4 class="title sub-title">Location</h4>
            <p>
              <strong>{video.year}</strong> - {video.shooting_location}, <u>{video.location}</u>
            </p>

            <h4 class="title sub-title">Equipment</h4>
            <table>
              <tr>
                <td><strong>Photo shooting</strong></td>
                <td>{video.equipment.photo}</td>
              </tr>
              <tr>
                <td><strong>Audio recording</strong></td>
                <td width="100%">{video.equipment.audio}</td>
              </tr>
            </table>

          </div>
          <div class="preview">
            <img src={video.cover} alt={video.name} />
            <button class="play-btn title" on:click={playVideo}>Play</button>
          </div>
        </div>
      </FullContent>
    {/if}
    <Footer />
<!--  </div>-->
</App>

<style>
  .video-content {
    background-color: var(--color-highlight);
    padding: 2em;
    position: relative;
    z-index: 10;
    display: flex;
    gap: 2em;
  }
  .video-content .title {
    margin: 0;
  }
  .video-content .sub-title {
    margin-top: 1.5em;
    color: var(--color-dark);
  }
  .video-content .content {
    flex: 1;
  }
  .video-content .preview {
    flex: 1;
    position: relative;
    overflow: hidden;
  }
  .video-content .preview img {
    position: absolute;
    height: 100%;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
  }
  .video-content .preview .play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    background-color: var(--color-highlight);
    padding: .4em 1.2em;
    border: none;
    border-radius: .5em;
    opacity: .7;
    transition: opacity, .3s;
  }
  .video-content .preview .play-btn:hover {
    opacity: 1;
    cursor: pointer;
  }
  .video-content .content table {
    margin: 1em 0;
  }
  h3 {
    font-family: Helvetica;
    font-weight: normal;
    margin: 2em 0 1em 0;
  }
  table {
    width: 100%;
  }
  table tr td {
    padding: 0 2em .5em 0;
    font-family: Helvetica;
  }
  table tr td:first-child {
    white-space: nowrap;
  }

  @media only screen and (max-width: 1200px) {
    .video-content {
      flex-direction: column-reverse;
      gap: 0;
      padding: 0;
    }
    .video-content .content {
      padding: 1em;
    }
    .video-content .preview {
      padding-top: 60%;
    }
  }
</style>
