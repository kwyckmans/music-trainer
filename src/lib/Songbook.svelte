<script lang="ts">
    import type { Song } from "./song";
    import { Difficulty } from "./song";

    export let songs: Song[] = [];
</script>

<div>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Artist</th>
                <th>Tags</th>
                <th>Difficulty</th>
                <th>Tab</th>
            </tr>
        </thead>
        <tbody>
            {#each songs as song}
                <tr>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td
                        >{#each song.tags as tag}
                            <mark> {tag} </mark>
                        {/each}</td
                    >
                    <td>{Difficulty[song.difficulty]}</td>
                    <td><a href={song.tab.toString()}>Link</a></td>
                </tr>
            {/each}
        </tbody>
        <tfoot>
            <tr>
                <td><button>Add</button></td>
            </tr>
        </tfoot>
    </table>
</div>

<style>
</style>
