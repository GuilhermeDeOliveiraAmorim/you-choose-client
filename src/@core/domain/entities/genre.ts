export type GenreProps = {
    genreId: string;
    name: string;
    picture: string;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
};

export class Genre {
    constructor(public props: GenreProps) {}

    get genreId(): string {
        return this.genreId;
    }

    get name(): string {
        return this.name;
    }

    get picture(): string {
        return this.picture;
    }

    get isDelete(): boolean {
        return this.isDelete;
    }

    get createdAt(): string {
        return this.createdAt;
    }

    get updatedAt(): string {
        return this.updatedAt;
    }

    get deletedAt(): string {
        return this.deletedAt;
    }

    toJSON() {
        return {
            genreId: this.genreId,
            name: this.name,
            picture: this.picture,
            isDeleted: this.isDelete,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt,
        };
    }
}
