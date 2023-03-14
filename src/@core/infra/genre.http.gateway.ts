import { AxiosInstance } from "axios";
import { Genre } from "../domain/entities/genre";
import { GenreGateway } from "../domain/gateways/genre.gateway";

export class GenreHttpGateway implements GenreGateway {
    constructor(private http: AxiosInstance) {}

    async create(genre: Genre): Promise<Genre> {
        const url = "/genres/create/genre";

        const genreCreated = await this.http.post<Genre>(url, genre);

        const genreNew = new Genre({
            genre_id: genreCreated.data.genre_id,
            name: genreCreated.data.name,
            picture: genreCreated.data.picture,
            is_deleted: genreCreated.data.is_deleted,
            created_at: genreCreated.data.created_at,
            updated_at: genreCreated.data.updated_at,
            deleted_at: genreCreated.data.deleted_at,
        });

        return genreNew;
    }

    async find(genreId: string): Promise<Genre> {
        const url = "/genres/find/genre";

        const genreFound = await this.http.get<Genre>(url + "/" + genreId);

        const genre = new Genre({
            genre_id: genreFound.data.genre_id,
            name: genreFound.data.name,
            picture: genreFound.data.picture,
            is_deleted: genreFound.data.is_deleted,
            created_at: genreFound.data.created_at,
            updated_at: genreFound.data.updated_at,
            deleted_at: genreFound.data.deleted_at,
        });

        return genre;
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
}
