<script lang="ts">
  import NoteTrainer from "$lib/NoteTrainer.svelte";
  import type { ComponentType } from "svelte/internal";
  import Exercise from "./Exercises/Exercise.svelte";
  // TODO: Pass in margin-left to sidebar and
  //   main body container, so it's not a hardcoded css value

  let component: ComponentType = NoteTrainer;
  let props = {};

  function loadComponent(component: ComponentType, props: {}) {
    component = component;
    props = props;
  }

  const exercises = [
    {
      name: "Note Trainer",
      component: NoteTrainer,
      props: {},
    },
    {
      name: "Exercise 1",
      component: Exercise,
      props: {
        name: "Exercise 1",
        description: "Do something",
        duration: 60,
      },
    },
    {
      name: "Exercise 2",
      component: Exercise,
      props: {
        name: "Exercise 2",
        description: "Do something else",
        duration: 120,
      },
    },
  ];

  let selected = exercises[0];
</script>

<div class="container content">
  <div class="row justify-content-center">
    <div class="col-6ff">
      <h1>Let's do some practice!</h1>
      <!-- {#each exercises as exercise}
        <button on:click={exercise.load}>
          {exercise.name}
        </button>
      {/each} -->
      <select bind:value={selected}>
        {#each exercises as exercise}
          <option value={exercise}>{exercise.name}</option>
        {/each}
      </select>
      <svelte:component this={selected.component} {...selected.props} />
      <!-- <NoteTrainer />
      <Exercise
        name="Finger Gym"
        description="Practice your finger muscles"
        duration={1 * 3600}
      />
      -->
    </div>
  </div>
</div>

<style>
  .content {
    margin-left: 250px;
    /* background-color: aqua; */
  }
</style>
