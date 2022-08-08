<script>
    import Content from '$lib/Practice.svelte';
    import Sidebar from "$lib/Sidebar.svelte";
  
    import { storedExercises } from "$lib/Stores/exercises";

    // TODO: Pass in margin-left to sidebar and 
    //   main body container, so it's not a hardcoded css value
  </script>
  
  <div class="row justify-content-center">
    <div class="col-auto">
        <h1>Manage Exercises</h1>
        {#each $storedExercises as exercise}
          <p>{exercise.name}</p>
          <p>{exercise.description}</p>
          <p>{exercise.duration}</p>
        {/each}
    </div>
  </div>
  
  <style>
  </style>
  
  