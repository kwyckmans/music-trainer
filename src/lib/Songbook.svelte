<script lang="ts">
    import type Song from '$lib/Song';
    export let songs: Song[] = [];
</script>

<div>
    <table>
        <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Key</th>
            <th>Tempo</th>
            <th>Time Signature</th>
            <th>Duration</th>
        </tr>
        {#each songs as song}
        <tr>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.key}</td>
            <td>{song.tempo}</td>
            <td>{song.timeSignature}</td>
            <td>{song.duration}</td>
        </tr>
        {/each}
    </table>
</div>

<style>
</style>
