<script lang="ts">
  import {goto} from "$app/navigation";

  export let video: VideoContent;

  const openVideo = (video) => {
    goto(`/videos/${video.name.toLowerCase().replace(/\s/gi, '-')}`);
  }
</script>

<div class="video" on:click={() => openVideo(video)}>
  <h5 class="scent-label scent">Scent</h5>
  <h2 class="title">
    {video.name}
    <small>{video.year}</small>
  </h2>
  <div class="video-cover" style={`background-image: url("${video.cover}")`}></div>
  <div class="content">
    <p>
      <strong>{video.location}</strong>
      {video.memories}
    </p>
  </div>
</div>

<style>
  .video {
    background-color: #F16B6C;
    min-width: 300px;
    max-width: 400px;
    min-height: 300px;
    flex: 1 0 100px;
    padding: 1em;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  .video:hover {
    cursor: pointer;
  }
  .video:hover .video-cover {
    opacity: 1;
  }
  .video .video-cover {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: teal url(none) no-repeat center center;
    background-size: cover;
    z-index: 1;
    opacity: .8;
    transition: opacity .3s;
  }
  .video h2 {
    position: relative;
    z-index: 2;
    flex: 2;
    min-height: 77px;
    margin: 0;
  }
  .video h5.scent-label {
    margin: 0;
    font-size: 0.8em;
    font-family: helvetica;
    font-weight: 500;
    z-index: 10;
    color: rgba(241,107,108, .9);
  }
  .video h2 small {
    display: block;
    font-size: .5em;
    color: white;
    opacity: .7;
  }
  .video .content {
    position: relative;
    z-index: 3;
    background-image: linear-gradient(0deg, rgba(42,26,78, .8), rgba(241,107,108, .9));
    padding: 10px 1em;
    flex: 1;
  }
  .video .content p {
    margin: 0;
    filter: invert();
    font-size: .9em;
    display: -webkit-box;
    max-width: 200px;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .video .content p strong {
    display: block;
    filter: none;
    color: black;
  }

  @media only screen and (max-width: 1200px) {
    .video .content p {
      max-width: 100%;
    }
  }
</style>
