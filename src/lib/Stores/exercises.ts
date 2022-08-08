import { writable } from "svelte/store";
import { browser } from "$app/env";

interface Exercise {
    name: string
    description: string
    duration: number
}

const start = browser ? JSON.parse(localStorage.getItem('exercises') || '[]') : '[]';

export const storedExercises = writable<Exercise[]>(start);
console.log(start);

storedExercises.subscribe(
    (exercises) => {
        if (browser) {
            localStorage.exercises = JSON.stringify(exercises);
        }
    }
);