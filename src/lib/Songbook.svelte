<script lang="ts">
    import { Song } from "./song";
    import { Difficulty } from "./song";
    import { PlusCircle } from "phosphor-svelte";
    import { clickOutside } from "../onclickoutside";

    export let songs: Song[] = [];

    function handleAddElement() {
        console.log("Adding empty song");
        songs = [
            ...songs,
            new Song(
                "",
                "",
                [],
                Difficulty.Undecided,
                new URL(
                    "https://tabs.ultimate-guitar.com/tab/the-cranberries/zombie-chords-844902"
                )
            ),
        ];
    }

    function handleClickOutside() {
        console.log("Clicked outside");
        editTitle = false;
    }

    let editTitle = false;
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
                    <td contenteditable="true" bind:textContent={song.title} />

                    <td contenteditable="true">{song.artist}</td>
                    <td>
                        <!-- Make this a component (or do it here) that on an OnClick Event I just add a new mark that can be edited. If mark is empty, remove it, otherwise store it. -->
                        {#each song.tags as tag}
                            <mark> {tag} </mark>
                        {/each}</td
                    >
                    <!-- Should be a dropdown on click-->
                    <td>{Difficulty[song.difficulty]}</td>
                    <!-- Should be a link. So should make sure it's a valid url. -->
                    <td><a href={song.tab.toString()}>Link</a></td>
                </tr>
            {/each}
            <tr>
                <td colspan="5" class="add-element" on:click={handleAddElement}
                    ><PlusCircle color="#ccc" weight="light" />
                    <small>Add</small></td
                >
            </tr>
        </tbody>
        <!-- <tfoot>
            <tr>
                <td><button>Add</button></td>
            </tr>
        </tfoot> -->
    </table>
</div>

<style>
    .add-element {
        cursor: pointer;
    }

    /* .add-element:hover {
        color: #e64a19;
    } */

    tr .add-element:hover {
        background-color: var(--primary-focus);
        color: var(--primary-inverse);
    }

    table {
        table-layout: fixed;
    }

    td {
        caret-color: var(--primary-hover);
        /* width: 100px; */
        overflow: hidden;
    }

    td:focus {
        outline: 1px solid var(--primary-hover);
        /* background-color: var(--primary-focus); */
        /* color: var(--primary-inverse); */
    }
</style>
