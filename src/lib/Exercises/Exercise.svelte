<script lang="ts">
import Timer from "$lib/Timer.svelte";
    export let name: string;
    export let description: string;
    export let duration: number;
</script>

<div>
    <h2>{name}</h2>
    <p>{description}</p>
    <p>{duration / 60 } minutes</p>
    <Timer duration={duration} />

</div>

<style>

</style>