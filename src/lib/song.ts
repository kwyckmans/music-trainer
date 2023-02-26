enum Difficulty {
    Easy = 1,
    Medium = 2,
    Hard = 3
}

class Song {
    private _title: string;

    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }

    private _artist: string;
    public get artist(): string {
        return this._artist;
    }
    public set artist(value: string) {
        this._artist = value;
    }

    private _tags: string[] = [];
    public get tags(): string[] {
        return this._tags;
    }

    public add_tag(tag: string) {
        this._tags.push(tag);
    }

    public remove_tag(tag: string) {
        this._tags = this._tags.filter(t => t !== tag);
    }

    private _difficulty: Difficulty = 1;
    public get difficulty(): Difficulty {
        return this._difficulty;
    }
    public set difficulty(value: Difficulty) {
        this._difficulty = value;
    }

    private _tab: URL;
    public get tab(): URL {
        return this._tab;
    }
    public set tab(value: URL) {
        this._tab = value;
    }

    constructor(title: string, artist: string, tags: string[], difficulty: Difficulty, tab: URL) {
        this._title = title;
        this._artist = artist;
        this._tags = tags;
        this._difficulty = difficulty;
        this._tab = tab;
    }
}


export { Song, Difficulty };