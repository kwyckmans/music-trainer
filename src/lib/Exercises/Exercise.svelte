<script lang="ts">
    export let name: string;
    export let description: string;
    export let duration: number;

    let running = false;

    function updateTimer() {
        now = Date.now();
    }

    let now = Date.now();
    let end = now + duration * 1000;
    let interval;
    // let interval = setInterval(updateTimer, 1000);

    $: count = Math.round((end - now) / 1000);

    function handleStart() {
        running = true;
        now = Date.now();
        end = now + count * 1000;
        interval = setInterval(updateTimer, 1000);        
    }
</script>

<div>
    <h2>{name}</h2>
    <p>{description}</p>
    <p>{duration / 60 } minutes</p>
    <p>{count}</p>
    <button on:click={handleStart}>Start</button>
    <button>Pause</button>
    <button>Reset</button>
</div>

<style>

</style>