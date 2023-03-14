import { Genre } from "@/@core/domain/entities/genre";
import { GenreGateway } from "@/@core/domain/gateways/genre.gateway";
import { File } from "buffer";

export class AddPictureToGenreUseCase {
    constructor(private genreGateway: GenreGateway) {}

    async execute(genre_id: string, file: File): Promise<Genre> {
        return await this.genreGateway.addPictureToGenre(genre_id, file);
    }
}
