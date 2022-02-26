<div class="full-content-band">
  <slot></slot>
</div>

<style>
  .full-content-band {
    flex: 100;
    width: 90%;
    margin: 0 auto;
  }

  @media only screen and (max-width: 1200px) {
    .full-content-band {
      width: 100%;
    }
  }
</style>
