<script lang="ts">
  import InstagramIcon from "../components/icons/InstgramIcon.svelte";
  import YoutubeIcon from "../components/icons/YoutubeIcon.svelte";
  import EmailIcon from "../components/icons/EmailIcon.svelte";
</script>

<div class="contacts">
  <p><strong>Sara Xiayu</strong> and <strong>Paolo Moretti</strong></p>
  <div>
    <a href="https://www.instagram.com/scentographers/" target="_blank"><InstagramIcon /></a>
    <a href="https://www.youtube.com/channel/UCJlgCp4If1G-6RVWmnjNigA" target="_blank"><YoutubeIcon /></a>
    <a href="mailto:scentographers@gmail.com"><EmailIcon /></a>
  </div>
</div>

<style>
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
