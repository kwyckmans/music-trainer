import type { Song } from "$lib/song";
import { writable, type Writable } from "svelte/store";
import { browser } from '$app/environment';

let loadedSongbook: Song[] = [];

if (browser) {
    const storedSongbook = localStorage.getItem("songbook") ?? "[]";
    loadedSongbook = <Song[]> JSON.parse(storedSongbook)
}

export const songbook: Writable<Song[]> = writable(loadedSongbook);

songbook.subscribe(value => {
    console.log("songbookStore", value);
    if (browser) {
        localStorage.setItem("songbook", JSON.stringify(value));
    }
});
