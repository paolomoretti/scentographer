<script lang="ts">
  import {page} from "$app/stores";
  const pathFinder = (path) => path.split('/')[1];

  $: selected = $page.url.pathname === '/' ? undefined : pathFinder($page.url.pathname);
  $: hasSelection = !!selected;

  const navItems: Array<NavigationItem> = [
    { name: 'The project', path: '/the-project'},
    { name: 'Contacts', path: '/contacts'}
  ]
</script>

<nav class:hasSelection>
  <ul>
    {#each navItems as item (item.path)}
      <li class:selected={selected === pathFinder(item.path)}><h2 class="title"><a href={item.path}>{item.name}</a></h2></li>
    {/each}
  </ul>
</nav>

<style>
  ul {
    display: block;
    max-width: var(--size-max-app-content);
    margin: 0 auto;
    padding: 0 var(--size-app-padding);
    text-align: center;
    background-color: white;
  }
  li {
    display: inline-block;
    padding: 0 calc(var(--size-app-padding) * .5);
    font-size: .8em;
  }
  ul li h2 {
    letter-spacing: normal;
  }
  ul li.selected {
    filter: none;
    font-size: 1.2em;
  }
</style>
