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
    padding: 0 var(--size-app-padding);
  }
  li {
    display: inline-block;
  }
  nav.hasSelection ul {
    display: block;
    max-width: var(--size-max-app-content);
    margin: 0 auto;
    padding: 0 var(--size-app-padding);
    align-items: baseline;
  }
  nav.hasSelection ul li {
    padding-right: var(--size-app-padding);
    filter: brightness(50%);
  }
  nav.hasSelection ul li:last-child {
    padding-right: 0;
  }
  nav.hasSelection ul li.selected {
    filter: none;
    font-size: 1.2em;
  }

  @media only screen and (max-width: 800px) {
    nav.hasSelection ul {
      display: flex;
    }
  }
</style>