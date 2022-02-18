<script>
  import App from "../components/App.svelte";
  import videos from "./videos/videos-content";
  import {goto} from '$app/navigation';
  import Header from "../components/Header.svelte";
  import InstagramIcon from "../components/icons/InstgramIcon.svelte";
  import YoutubeIcon from "../components/icons/YoutubeIcon.svelte";
  import EmailIcon from "../components/icons/EmailIcon.svelte";
  import Footer from "../components/Footer.svelte";

  $: lastVideo = videos[0];
  $: otherVideos = [...videos].splice(1);

  const openVideo = (video) => {
    goto(`/videos/${video.name.toLowerCase().replace(/\s/gi, '-')}`);
  }
</script>

<App>
  <div class="home">
    <Header />
    <div class="latest-video">
      <div class="project">
        <h3 class="title">Project</h3>
        <p>Scentographers is our own personal device to store and play memories of scents.</p>
        <p>Each scent is stored and reproduced as a digital video.</p>
        <p>All images are shot where the scent is sensed, then processed, filtered and edited in a video according to the scent cues.</p>
        <p align="right"><a href="/the-project"><strong>Read more ...</strong></a></p>
      </div>
      <div class="content">
        <h5 class="scent-label">Scent</h5>
        <h3 class="title">{lastVideo.name}<small>{lastVideo.year}</small></h3>
        <p>
          <strong>{lastVideo.shooting_location}, {lastVideo.location}</strong> <br>
          {lastVideo.memories}
        </p>
      </div>
      <div class="image">
        <img src={lastVideo.cover} alt="">
      </div>
    </div>
    <h2 class="title section-title other-videos-title">
      Previous videos
    </h2>
    <div class="other-videos">
      {#each otherVideos as video (video.index)}
        <div class="video" on:click={() => openVideo(video)}>
          <h5 class="scent-label">Scent</h5>
          <h2 class="title">
            {video.name}
            <small>{video.year}</small>
          </h2>
          <div class="video-cover" style={`background-image: url("${video.cover}")`}></div>
          <div class="content">
            <p>
              <strong>{video.shooting_location}, {video.location}</strong>
              {video.memories}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <h2 class="title section-title">Contacts</h2>
    <div class="contacts">
      <p><strong>Sara Xiayu</strong> and <strong>Paolo Moretti</strong></p>
      <div>
        <a href="https://www.instagram.com/scentographers/" target="_blank"><InstagramIcon /></a>
        <a href="https://www.youtube.com/channel/UCJlgCp4If1G-6RVWmnjNigA" target="_blank"><YoutubeIcon /></a>
        <a href="mailto:scentographers@gmail.com"><EmailIcon /></a>
      </div>
    </div>
    <Footer />
  </div>
</App>

<style>
  .project {
    padding: 2em 1em 1em;
    max-width: 400px;
  }
  .project h3 {
    flex: 1;
  }
  .project p {
    filter: invert();
    font-size: .9em;
    max-width: 80%;
  }
  .latest-video {
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    margin: 2em auto 3em;
    max-width: 1200px;
    position: relative;
    top: -60px;
  }
  .latest-video .image {
    flex: 1;
    max-width: 400px;
    position: relative;
    overflow: hidden;
  }
  .latest-video .image img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }
  .latest-video .content {
    padding: 1em 2em;
    background-color: #F16B6C;
    background-image: linear-gradient(0deg, #2A1A4B, #F16B6C);
    max-width: 400px;
  }
  .latest-video .content h3 {
    font-size: 1.7em;
    font-weight: 200;
  }
  .latest-video .content h5.scent-label {
    margin: 0;
    font-size: 0.9em;
    font-family: helvetica;
    font-weight: 500;
    z-index: 10;
    color: white;
    transform: skew(18deg, 1deg) rotate3d(71, -82, 7, -3deg) translateY(24px) translateX(-10px);
  }
  .latest-video .content h3 small {
    font-size: .6em;
    margin-left: .5em;
  }
  .latest-video .content p {
    filter: invert();
  }
  .section-title {
    text-align: center;
    margin-top: 3em;
  }
  .other-videos-title {
    margin-top: -40px;
  }
  .other-videos {
    display: flex;;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5em;
    padding: 0 1.5em;
  }
  .other-videos .video {
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
  .other-videos .video .video-cover {
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
  .other-videos .video h2 {
    position: relative;
    z-index: 2;
    flex: 1;
    min-height: 77px;
    margin: 0;
  }
  .other-videos .video h5.scent-label {
    margin: 0;
    font-size: 0.8em;
    font-family: helvetica;
    font-weight: 500;
    z-index: 10;
    color: rgba(241,107,108, .9);
    transform: skew(18deg, 1deg) rotate3d(71, -82, 7, -3deg);
  }
  .other-videos .video h2 small {
    font-size: .6em;
    margin-left: .5em;
    color: white;
    opacity: .7;
  }
  .other-videos .video .content {
    position: relative;
    z-index: 3;
    background-image: linear-gradient(0deg, rgba(42,26,78, .8), rgba(241,107,108, .9));
    padding: 10px 1em;
    flex: 1;
  }
  .other-videos .video .content p {
    margin: 0;
    filter: invert();
    font-size: .9em;
    display: -webkit-box;
    max-width: 200px;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .other-videos .video .content p strong {
    display: block;
    filter: none;
    color: black;
  }
  .other-videos .video:hover {
    cursor: pointer;
  }
  .other-videos .video:hover .video-cover {
    opacity: 1;
  }
  .contacts {
    font-size: .8em;
    background-color: var(--color-highlight);
    width: 17em;
    height: 17em;
    display: flex;
    border-radius: 17em;
    flex-grow: 1;
    margin: 2em auto 6em;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .contacts a {
    display: inline-block;
    margin: 0 .5em;
    fill: white;
  }
  .contacts a:hover {
    fill: var(--color-dark);
  }
</style>
