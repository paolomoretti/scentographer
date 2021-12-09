<script lang="ts">
  import {page} from "$app/stores";
  const pathFinder = (path) => path.split('/')[1];

  $: selected = $page.path === '/' ? undefined : pathFinder($page.path);
  $: hasSelection = !!selected;

  const navItems: Array<NavigationItem> = [
    { name: 'The project', path: '/the-project'},
    { name: 'Videos', path: '/videos'},
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
    display: flex;
    justify-content: space-between;
    align-content: center;
    max-width: 600px;
    margin: 10vmax auto;
  }
  li {
    display: inline-block;
  }

  nav.hasSelection ul {
    display: block;
    max-width: var(--size-max-app-content);
    margin: 0 auto;
    padding: 0 var(--size-app-padding);
  }
  nav.hasSelection ul li {
    padding-right: var(--size-app-padding);
    filter: brightness(50%);
  }
  nav.hasSelection ul li.selected {
    filter: none;
    font-size: 1.2em;
  }
</style>