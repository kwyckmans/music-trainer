<script>
  import { page } from "$app/stores";
  // export const width = 250;
</script>

<div class="sidebar">
  <ul role="navigation">
    <li>
      <a href="/" class:active={$page.url.pathname === "/"}> Practice </a>
    </li>
    <li>
      <a href="/exercises" class:active={$page.url.pathname === "/exercises"}>
        Exercises
      </a>
    </li>
    <li>
      <a href="/routines" class:active={$page.url.pathname === "/routines"}>
        Routines
      </a>
    </li>
    <li>
      <a href="/songbook" class:active={$page.url.pathname === "/songbook"}>Songbook</a>
    </li>
    <li>
      <a href="/settings" class:active={$page.url.pathname === "/settings"}>
        Settings
      </a>
    </li>
  </ul>
</div>

<style>
  .sidebar {
    width: var(--width);
    height: 100%;
    background-color: #FBFBFA;
    /* background-color: red; */
    position: fixed;
    transition: 0.5s;
    margin: 0;
    padding: 0;
  }

  .sidebar ul li a:hover {
    background-color: var(--primary-hover);
    color: var(--primary-inverse);
    /* color: #333; */
  }

  .sidebar ul li a.active {
    background-color: var(--primary-hover);
    color: var(--primary-inverse);
    /* color: #333; */
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    /* color: rgb(55, 53, 47); */

  }
  
  li {
    text-align: center;
    padding: 0;
    margin: 0;
    color: rgb(55, 53, 47);

  }

  a {
    display: block;
    padding: 16px;
    text-decoration: none;
    /* color: #333; */
    color: rgb(55, 53, 47);

  }
</style>
