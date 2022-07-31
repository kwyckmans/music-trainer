<script>
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

<p>
    Play {note}

    pressed {key}
</p>

<style>
    p {
        font-size: 2 em;
    }
</style>
