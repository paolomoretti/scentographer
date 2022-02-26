<script>
  import App from "../components/App.svelte";
  import videos from "./videos/videos-content";
  import {goto} from '$app/navigation';
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  import Contacts from "../components/Contacts.svelte";
  import VideoThumbList from "../components/videos/VideoThumbList.svelte";

  $: lastVideo = videos[0];
  $: otherVideos = [...videos].splice(1);

  const openVideo = (video) => {
    goto(`/videos/${video.name.toLowerCase().replace(/\s/gi, '-')}`);
  }
  const openProject = () => {
    goto(`/the-project`);
  }
</script>

<App>
  <div class="home">
    <Header />
    <div class="latest-video">
      <div class="project" on:click={() => openProject()}>
        <h3 class="title">Project</h3>
        <p>Scentographers is our own personal device to store and play memories of scents.</p>
        <p>Each scent is stored and reproduced as a digital video.</p>
        <p>All images are shot where the scent is sensed, then processed, filtered and edited in a video according to the scent cues.</p>
        <p align="right"><a><strong>Read more ...</strong></a></p>
      </div>
      <div class="content" on:click={() => openVideo(lastVideo)}>
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
    <VideoThumbList videos={otherVideos} />

    <h2 class="title section-title">Contacts</h2>
    <Contacts />
    <Footer />
  </div>
</App>

<style>
  .project {
    padding: 2em 1em 1em;
    max-width: 400px;
    cursor: pointer;
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
    transition: filter .3s;
  }
  .latest-video .content:hover {
    cursor: pointer;
    filter: sepia(.8);
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


  @media only screen and (max-width: 1200px) {
    .latest-video {
      flex-direction: column;
      top: -80px;
      margin-bottom: 0;
    }
    .latest-video .project,
    .latest-video .content {
      padding-bottom: 0;
      max-width: 750px;
      margin: 0 auto;
    }
    .latest-video .project p {
      max-width: 100%;
    }
  }
</style>
