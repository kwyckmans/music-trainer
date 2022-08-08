<script>
  import { page } from "$app/stores";
  // export const width = 250;
</script>

<div class="sidebar">
  <ul class="nav justify-content-center nav-fill">
    <li class="nav-item">
      <a href="/" class="nav-link" class:active={$page.url.pathname === "/"}>
        Practice
      </a>
    </li>
    <li class="nav-item">
      <a
        href="/exercises"
        class="nav-link"
        class:active={$page.url.pathname === "/exercises"}
      >
        Exercises
      </a>
    </li>
    <li class="nav-item">
      <a
        href="/routines"
        class="nav-link"
        class:active={$page.url.pathname === "/routines"}
      >
        Routines
      </a>
    </li>
    <li class="nav-item">
      <a
        href="/settings"
        class="nav-link"
        class:active={$page.url.pathname === "/settings"}
      >
        Settings
      </a>
    </li>
  </ul>
</div>

<style>
  .sidebar {
    width: var(--width);
    height: 100%;
    background-color: #333;
    position: fixed;
    transition: 0.5s;
  }

  /* .sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .sidebar ul li {
    padding: 10px;
    margin: 0;
    border-bottom: 1px solid #333;
  } */

  /* .sidebar ul li a {
    color: white;
    text-decoration: none;
     
    display: block;
  }
  */
  .sidebar ul li a:hover {
    background-color: #fff;
    color: #333;
  } 

  
  .sidebar ul li a.active {
    background-color: #fff;
    color: #333;
  }
</style>
