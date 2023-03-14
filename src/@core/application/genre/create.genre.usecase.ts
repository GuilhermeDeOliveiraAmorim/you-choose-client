import { Genre } from "@/@core/domain/entities/genre";
import { GenreGateway } from "@/@core/domain/gateways/genre.gateway";

export class CreateGenreUseCase {
    constructor(private genreGateway: GenreGateway) {}

    async execute(name: string): Promise<Genre> {
        return await this.genreGateway.create(name);
    }
}
