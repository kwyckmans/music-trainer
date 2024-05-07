<script>
  import Practice from "$lib/Practice.svelte";
  import Sidebar from "$lib/Sidebar.svelte";
  import { onMount, onDestroy } from "svelte";
  // TODO: Pass in margin-left to sidebar and
  //   main body container, so it's not a hardcoded css value
  // import workerUrl from "$lib/workers/dbworker.ts?url";
  import { executeSql } from "$lib/workers/dbworker";

  let dbStatus = "Not initialized";
  let loading = true;

  onDestroy(() => {
    async function closeDB(){
      console.log("Closing Database");
      await executeSql("close", {
        filename: "file:mydb.sqlite3?vfs=opfs",
      })
    }
      
    });

  onMount(() => {
    console.log("page mounted");
    // if (!browser){
    //   console.log("On server, skipping initialization");

    //     return null;
    // }

    // const module = await import workerUrl from "$lib/workers/dbworker.ts?url";

    // if (import.meta.env.SSR) {
    //   console.log("On server, skipping initialization");
    //   return; // Skip initialization on the server
    // }
    console.log("initializing db");
    dbShizzle();
  });

  async function dbShizzle() {
    try{

    console.log("Executing an open:")
    // Open the database
    const openResponse = await executeSql("open", {
      filename: "file:mydb.sqlite3?vfs=opfs",
    });
    console.log("Database opened:", openResponse.result.filename);
    // const queryResponse = await executeSql('exec', {
    //           dbId: openResponse.dbId,
    //           sql: sqlQuery
    //       });

    const configResponse = await executeSql("config-get", {});
    console.log('Running SQLite3 version', configResponse.result.version.libVersion);
    dbStatus = "Initialized!";
    const sql = "CREATE TABLE IF NOT EXISTS songbook (id INTEGER PRIMARY KEY AUTOINCREMENT);"
    const sqlResponse = await executeSql("exec", {
      dbId: openResponse.dbId,
      sql: sql
    });

    console.log("Result: ", sqlResponse);
    loading = false;
  } catch (err) {
      console.error("Error using SQLite", err.message);
      loading = false;
    }
  }
</script>

{#if loading}
 <p>Loading!</p>
{:else}
<p>Status: {dbStatus}</p>
{/if}
<Practice></Practice>

<style>
</style>