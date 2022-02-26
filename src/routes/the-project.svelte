<script>
  import App from "../components/App.svelte";
  import MainNavigation from "../components/navigations/MainNavigation.svelte";
  import FullContent from "../components/FullContent.svelte";
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<App>
  <div class="the-project">
    <Header compact={true} />
    <FullContent>
      <div class="content">
        <h2 class="title">The project</h2>
        <p>Scentographers is <strong>Paolo Moretti</strong> and <strong>Sara Xiayu</strong> and it is an attempt to <strong>record
          and archive scents</strong>.</p>
        <p>Odours are chemical molecules and they are detected when they touch our olfactory epithelium (a small patch of
          tissue at the back of our noses).</p>
        <p>They are so much more than that though: they can almost be psychic triggers to <strong>re-evoking past
          experiences</strong>. When
          scents are detected, our brain can instantly evoke emotions and feelings that belong to specific memories.</p>
        <p>Sadly, tools to store odours and play them back are yet to exist.</p>

        <p><strong>Scentographers is our own personal device to store and play memories of scents.</strong></p>
        <p>Each scent is stored and reproduced as a digital video.</p>
        <p>All images are shot where the scent is sensed, then processed, filtered and edited in a video according to the scent cues.</p>
        <p>All sounds are field-recorded in real time during the photo-shooting; sound samples are then used as an ambient generator, filtered through resonators, delays and other effects according to the scent features.</p>
      </div>
    </FullContent>
    <Footer />
  </div>
</App>

<style>
  .content {
    width: 900px;
    max-width: 90%;
    margin: 0 auto 4em;
    background-color: var(--color-highlight);
    padding: 1em 2em;
    position: relative;
    z-index: 10;
  }

  @media only screen and (max-width: 1200px) {
    .content {
      width: 100%;
      max-width: 100%;
    }
  }
</style>
