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
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
