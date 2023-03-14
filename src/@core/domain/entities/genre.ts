export type GenreProps = {
    genre_id: string;
    name: string;
    picture: string;
    is_deleted: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: string;
};

export class Genre {
    constructor(public props: GenreProps) {}

    get genre_id(): string {
        return this.genre_id;
    }

    get name(): string {
        return this.name;
    }

    get picture(): string {
        return this.picture;
    }

    get is_deleted(): boolean {
        return this.is_deleted;
    }

    get created_at(): string {
        return this.created_at;
    }

    get updated_at(): string {
        return this.updated_at;
    }

    get deleted_at(): string {
        return this.deleted_at;
    }

    toJSON() {
        return {
            genreId: this.genre_id,
            name: this.name,
            picture: this.picture,
            isDeleted: this.is_deleted,
            createdAt: this.created_at,
            updatedAt: this.updated_at,
            deletedAt: this.deleted_at,
        };
    }
}
