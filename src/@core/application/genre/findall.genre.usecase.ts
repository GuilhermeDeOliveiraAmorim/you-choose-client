import { Genre } from "@/@core/domain/entities/genre";
import { GenreGateway } from "@/@core/domain/gateways/genre.gateway";

export class FindAllGenreUseCase {
    constructor(private genreGateway: GenreGateway) {}

    async execute(): Promise<Genre[]> {
        return await this.genreGateway.findAll();
    }
}
