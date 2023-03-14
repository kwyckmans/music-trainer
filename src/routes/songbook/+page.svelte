<script>
    import { Song } from "$lib/song";
    import Songbook from "$lib/Songbook.svelte";
</script>

<div class="row justify-content-center">
    <div class="col-auto">
        <h1>Songbook</h1>
        <Songbook
            songs={[
                new Song(
                    "Zombie",
                    "The Cranberries",
                    ["rock", "alternative", "irish", "solo", "acoustic"],
                    1,
                    new URL("https://tabs.ultimate-guitar.com/tab/the-cranberries/zombie-chords-844902")
                ),
                new Song(
                    "Live Forever",
                    "Oasis",
                    ["rock", "alternative"],
                    2,
                    new URL("https://tabs.ultimate-guitar.com/tab/oasis/live-forever-chords-1010000")
                )
            ]}
        />
    </div>
</div>

<style>
</style>
