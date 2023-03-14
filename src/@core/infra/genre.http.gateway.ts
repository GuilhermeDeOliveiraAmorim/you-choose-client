import { AxiosInstance } from "axios";
import { Genre } from "../domain/entities/genre";
import { GenreGateway } from "../domain/gateways/genre.gateway";

export class GenreHttpGateway implements GenreGateway {
    constructor(private http: AxiosInstance) {}
    findGenreByName(name: string): Promise<Genre> {
        throw new Error("Method not implemented.");
    }

    async create(genre: Genre): Promise<Genre> {
        const url = "/genres/create/genre";

        const genreCreated = await this.http.post<Genre>(url, genre);

        const genreNew = new Genre({
            genreId: genreCreated.data.genreId,
            name: genreCreated.data.name,
            picture: genreCreated.data.picture,
            isDeleted: genreCreated.data.isDelete,
            createdAt: genreCreated.data.createdAt,
            updatedAt: genreCreated.data.updatedAt,
            deletedAt: genreCreated.data.deletedAt,
        });

        return genreNew;
    }

    async find(genreId: string): Promise<Genre> {
        const url = "/genres/find/genre";

        const genreFound = await this.http.get<Genre>(url + "/" + genreId);

        const genre = new Genre({
            genreId: genreFound.data.genreId,
            name: genreFound.data.name,
            picture: genreFound.data.picture,
            isDeleted: genreFound.data.isDelete,
            createdAt: genreFound.data.createdAt,
            updatedAt: genreFound.data.updatedAt,
            deletedAt: genreFound.data.deletedAt,
        });

        return genre;
    }

    async update(genre: Genre): Promise<Genre> {
        const url = "/genres/update/genre";

        const genreUpdated = await this.http.put<Genre>(url, genre);

        const genreNew = new Genre({
            genreId: genreUpdated.data.genreId,
            name: genreUpdated.data.name,
            picture: genreUpdated.data.picture,
            isDeleted: genreUpdated.data.isDelete,
            createdAt: genreUpdated.data.createdAt,
            updatedAt: genreUpdated.data.updatedAt,
            deletedAt: genreUpdated.data.deletedAt,
        });

        return genreNew;
    }

    async delete(genre: string): Promise<boolean> {
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

        const genres = await this.http.put<Genre[]>(url);

        return genres.data;
    }
}
