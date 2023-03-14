import { GenreGateway } from "@/@core/domain/gateways/genre.gateway";

export class IsDeletedGenreUseCase {
    constructor(private genreGateway: GenreGateway) {}

    async execute(genreId: string): Promise<boolean> {
        return await this.genreGateway.isDeleted(genreId);
    }
}
