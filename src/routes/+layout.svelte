<script>
  // import "@picocss/pico/css/pico.css";

  import Container from "$lib/Container.svelte";
  import Sidebar from "$lib/Sidebar.svelte";
  import "../app.scss";

  const sidebarWidth = "150px";
</script>

<Sidebar --width={sidebarWidth} />
<Container --sidebar-width={sidebarWidth}>
  <slot />
</Container>
