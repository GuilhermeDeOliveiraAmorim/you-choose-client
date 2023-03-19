import { AxiosInstance } from "axios";
import { File } from "buffer";
import { Genre } from "../domain/entities/genre";
import { GenreGateway } from "../domain/gateways/genre.gateway";

interface OutputCreateGenre {
    genre: Genre;
}

export class GenreHttpGateway implements GenreGateway {
    constructor(private http: AxiosInstance) {}

    async create(name: string): Promise<Genre> {
        const url = "/genres/create/genre";

        const genreCreated = await this.http.post<OutputCreateGenre>(url, {
            name: name,
        });

        const genreNew = new Genre({
            genre_id: genreCreated.data.genre.genre_id,
            name: genreCreated.data.genre.name,
            picture: genreCreated.data.genre.picture,
            is_deleted: genreCreated.data.genre.is_deleted,
            created_at: genreCreated.data.genre.created_at,
            updated_at: genreCreated.data.genre.updated_at,
            deleted_at: genreCreated.data.genre.deleted_at,
        });

        return genreNew;
    }

    async find(genreId: string): Promise<Genre> {
        const url = "/genres/find/genre?genre_id=";

        const genreFound = await this.http.get<Genre>(url + genreId);

        const genreNew = new Genre({
            genre_id: genreFound.data.genre_id,
            name: genreFound.data.name,
            picture: genreFound.data.picture,
            is_deleted: genreFound.data.is_deleted,
            created_at: genreFound.data.created_at,
            updated_at: genreFound.data.updated_at,
            deleted_at: genreFound.data.deleted_at,
        });

        console.log(genreFound);

        return genreNew;
    }

    async update(genre: Genre): Promise<Genre> {
        const url = "/genres/update/genre";

        const genreUpdated = await this.http.put<Genre>(url, genre);

        const genreNew = new Genre({
            genre_id: genreUpdated.data.genre_id,
            name: genreUpdated.data.name,
            picture: genreUpdated.data.picture,
            is_deleted: genreUpdated.data.is_deleted,
            created_at: genreUpdated.data.created_at,
            updated_at: genreUpdated.data.updated_at,
            deleted_at: genreUpdated.data.deleted_at,
        });

        return genreNew;
    }

    async delete(genre: Genre): Promise<boolean> {
        const url = "/genres/delete/genre";

        const genreDeleted = await this.http.put<boolean>(url, genre);

        return genreDeleted.data;
    }

    async isDeleted(genreId: string): Promise<boolean> {
        const url = "/genres/isdeleted/genre";

        const genreDeleted = await this.http.put<boolean>(url + "/" + genreId);

        return genreDeleted.data;
    }

    async findAll(): Promise<Genre[]> {
        const url = "/genres/find/all/genres";

        const genres = await this.http.get<Genre[]>(url);

        return genres.data;
    }

    async addPictureToGenre(genre_id: string, file: File): Promise<Genre> {
        const url = "/genres/add/genre/picture";

        const genre = await this.http.post<Genre>(
            url,
            {
                genre_id: genre_id,
                file: file,
            },
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return genre.data;
    }
}
