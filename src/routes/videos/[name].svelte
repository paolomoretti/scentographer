<script lang="ts">
  import {page} from "$app/stores";
  import videos from "./videos-content";
  import App from "../../components/App.svelte";
  import MainNavigation from "../../components/navigations/MainNavigation.svelte";
  import FullContent from "../../components/FullContent.svelte";
  import VideosNavigation from "../../components/navigations/VideosNavigation.svelte";

  $: video = videos.find(v => v.name.toLowerCase().replace(/\s/gi, '-') === $page.params.name) as VideoContent;
</script>

<App>
  <MainNavigation />
  <FullContent>
    <VideosNavigation />
    <div class="video-frame-container">
      <iframe title={video.name} id="player" name="player" width="100%" height="100%" src={video.src} frameborder="0"></iframe>
      <p class="loader">loading...</p>
    </div>
    <p class="description">{video.memories}</p>
    <table>
      <tr>
        <td colspan="2"><h3>Shooting and recording location</h3></td>
      </tr>
      <tr>
        <td colspan="2" style="padding: 0">
          {#if video.maps && video.maps.length > 0}
            <div class="maps-container">
              {#each video.maps as map (map)}
                <div>
                  <img class="location-map" src={map} alt={`${video.name} map`} />
                </div>
              {/each}
            </div>
          {/if}
          <strong>{video.year}</strong> - {video.shooting_location}, <u>{video.location}</u>
        </td>
      </tr>
      <tr>
        <td colspan="2"><h3>Equipment</h3></td>
      </tr>
      <tr>
        <td><strong>Photo shooting</strong></td>
        <td>{video.equipment.photo}</td>
      </tr>
      <tr>
        <td><strong>Audio recording</strong></td>
        <td width="100%">{video.equipment.audio}</td>
      </tr>
    </table>
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
  .maps-container {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0.5em;
    max-width: 100%;
  }
  .maps-container > * {
    flex: 0 0 33.3333%;
  }
  .location-map {
    width: 100%;
    max-width: 500px;
    display: block;
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
</style>
