import { Genre } from "@/@core/domain/entities/genre";
import { GenreGateway } from "@/@core/domain/gateways/genre.gateway";

export class CreateGenreUseCase {
    constructor(private genreGateway: GenreGateway) {}

    async execute(genre: Genre): Promise<Genre> {
        return await this.genreGateway.create(genre);
    }
}
