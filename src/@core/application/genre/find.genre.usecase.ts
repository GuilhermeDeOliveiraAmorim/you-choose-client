import { Genre } from "@/@core/domain/entities/genre";
import { GenreGateway } from "@/@core/domain/gateways/genre.gateway";

export class FindGenreUseCase {
    constructor(private genreGateway: GenreGateway) {}

    async execute(genreId: string): Promise<Genre> {
        return await this.genreGateway.find(genreId);
    }
}
