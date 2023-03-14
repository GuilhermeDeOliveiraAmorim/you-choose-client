import { Genre } from "@/@core/domain/entities/genre";
import { GenreGateway } from "@/@core/domain/gateways/genre.gateway";

export class DeleteGenreUseCase {
    constructor(private genreGateway: GenreGateway) {}

    async execute(genre: Genre): Promise<boolean> {
        return await this.genreGateway.delete(genre);
    }
}
