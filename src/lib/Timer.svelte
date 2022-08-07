<script lang="ts">
    export let duration: number;

    let now = Date.now();
    let end = now + duration * 1000;
    let interval: NodeJS.Timer;

    $: secondsLeft = Math.round((end - now) / 1000);
    $: h = Math.floor(secondsLeft / 3600);
    $: m = Math.floor((secondsLeft - h * 3600) / 60);
    $: s = secondsLeft - h * 3600 - m * 60;
    $: if (secondsLeft === 0) clearInterval(interval);

    function updateTimer() {
        now = Date.now();
    }

    function handleStart() {
        now = Date.now();
        end = now + secondsLeft * 1000;
        interval = setInterval(updateTimer, 1000);
    }

    function handlePause() {
        clearInterval(interval);
    }

    function handleReset() {
        clearInterval(interval);
        now = Date.now();
        end = now + duration * 1000;
    }

</script>

<p>{h}h {m}m {s}s</p>
<button on:click={handleStart}>Start</button>
<button on:click={handlePause}>Pause</button>
<button on:click={handleReset}>Reset</button>
