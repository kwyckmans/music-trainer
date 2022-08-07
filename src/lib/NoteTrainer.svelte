<script>
  const name = "Note Trainer";
  let notes = ["A", "B", "C"];
  let note = selectNote();
  let key = undefined;

  function selectNote() {
    return notes[Math.floor(Math.random() * notes.length)];
  }

  function handleKeyPress(event) {
    console.log("presed a key", event);
    note = selectNote();
    key = event.key;
  }
</script>

<svelte:window on:keypress={handleKeyPress} />

<div>
  <h2>{name}</h2>
  <p>
    Play {note}
  </p>
</div>

<style>
  p {
    font-size: 2 em;
  }
</style>
