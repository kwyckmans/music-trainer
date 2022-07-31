<script>
  import NoteTrainer from "$lib/NoteTrainer.svelte";
  import Sidebar from "$lib/Sidebar.svelte";

  // TODO: Pass in margin-left to sidebar and 
  //   main body container, so it's not a hardcoded css value
</script>

<div class="container content">
  <div class="row justify-content-center">
    <div class="col-6ff">
      <h1>Let's do some practice!</h1>    
      <NoteTrainer />
    </div>
  </div>
</div>

<style>
  .content {
    margin-left:250px;
    /* background-color: aqua; */
  }
</style>

