enum Difficulty {
    Undecided = 0,
    Easy = 1,
    Medium = 2,
    Hard = 3
}

class Song {
    title: string = "";
    artist: string = "";
    tags: string[] = [];
    difficulty: Difficulty = 1;
    tab: URL = new URL("https://www.google.com");

    public add_tag(tag: string) {
        this.tags.push(tag);
    }

    public remove_tag(tag: string) {
        this.tags = this.tags.filter(t => t !== tag);
    }

    constructor(title: string, artist: string, tags: string[], difficulty: Difficulty, tab: URL) {
        this.title = title;
        this.artist = artist;
        this.tags = tags;
        this.difficulty = difficulty;
        this.tab = tab;
    }
}


export { Song, Difficulty };