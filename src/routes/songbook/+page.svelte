<script>
    import { Song } from "$lib/song";
    import Songbook from "$lib/Songbook.svelte";

</script>

<div class="row justify-content-center">
    <div class="col-auto">
        <h1>Songbook</h1>
        <Songbook songs={
            [new Song("test")]
        }></Songbook>
    </div>
</div>

<style>
</style>
