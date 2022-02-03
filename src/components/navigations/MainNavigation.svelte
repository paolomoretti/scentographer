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
    justify-content: space-between;
    align-content: center;
    display: block;
    max-width: var(--size-max-app-content);
    margin: 0 auto;
    padding: 0 var(--size-app-padding);
    align-items: baseline;
  }
  li {
    display: inline-block;
    padding-right: var(--size-app-padding);
    filter: brightness(50%);
  }
  ul li:last-child {
    padding-right: 0;
  }
  ul li.selected {
    filter: none;
    font-size: 1.2em;
  }

  @media only screen and (max-width: 800px) {
    ul {
      display: flex;
    }
  }
</style>
