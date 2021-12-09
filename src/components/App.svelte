<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
</script>

<div class="app">
  <Header />
  <slot />
  <Footer />
</div>

<style>
  .app {
    height: 100%;
    width: 100%;
    background: url("/images/background.jpg") no-repeat center center;
    background-size: cover;
  }
</style>