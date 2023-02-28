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
                    {#if editTitle}
                        <td>
                            <input
                                type="text"
                                use:clickOutside
                                on:clickoutside={handleClickOutside}
                                bind:value={song.title}
                            />
                        </td>
                    {:else}
                        <td on:click={() => (editTitle = true)}>{song.title}</td
                        >
                    {/if}

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
</style>
