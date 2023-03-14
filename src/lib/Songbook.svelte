<script lang="ts">
    import { Song } from "./song";
    import { Difficulty } from "./song";
    import { PlusCircle } from "phosphor-svelte";
    // import { clickOutside } from "../onclickoutside";

    export let songs: Song[] = [];

    let difficultyDropdownOpen: boolean[] = songs.map(() => false);


    // Inspired by https://svelte.dev/repl/4c5dfd34cc634774bd242725f0fc2dab?version=3.46.4
    const handleDropdownClick = (i: number) => {
        difficultyDropdownOpen[i] = !difficultyDropdownOpen[i];
    };

    const handleDropdownFocusLoss = (
        dropdownIndex: number,
        event: FocusEvent
    ) => {
        console.log("Focus lost");
        // use "focusout" event to ensure that we can close the dropdown when clicking outside or when we leave the dropdown with the "Tab" button
        if (
            event.relatedTarget instanceof HTMLElement &&
            event.currentTarget.contains(event.relatedTarget)
        )
            return; // check if the new focus target doesn't present in the dropdown tree (exclude ul\li padding area because relatedTarget, in this case, will be null)
        difficultyDropdownOpen[dropdownIndex] = false;
    };

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
            {#each songs as song, i}
                <tr>
                    <td contenteditable="true" bind:textContent={song.title} />

                    <td contenteditable="true" bind:textContent={song.artist}
                        >{song.artist}</td
                    >
                    <td>
                        <!-- Make this a component (or do it here) that on an OnClick Event I just add a new mark that can be edited. If mark is empty, remove it, otherwise store it. -->
                        {#each song.tags as tag}
                            <mark> {tag} </mark>
                        {/each}</td
                    >
                    <!-- Should be a dropdown on click-->
                    {#if difficultyDropdownOpen[i]}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <td
                            on:click={() => handleDropdownClick(i)}
                            style="outline: 1px solid var(--primary-hover);"
                        >
                            <select
                                on:focusout={(e) =>
                                    handleDropdownFocusLoss(i, e)}
                                bind:value={song.difficulty}
                                class="dropdown"
                            >
                                {#each Object.keys(Difficulty).filter( (item) => {
                                        return isNaN(Number(item));
                                    } ) as difficulty}
                                    <option value={Difficulty[difficulty]}>
                                        {difficulty}
                                    </option>
                                {/each}
                            </select>
                        </td>
                    {:else}
                        <!-- svelte-ignore a11y-click-events-have-key-events -->
                        <td on:click={() => handleDropdownClick(i)}
                            >{Difficulty[song.difficulty]}</td
                        >
                    {/if}
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

    .dropdown {
        /* background-color: var(--primary-focus); */
        /* color: var(--primary-inverse); */
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        font-size: inherit;
    }
</style>
