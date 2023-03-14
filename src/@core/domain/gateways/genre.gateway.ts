import { Genre } from "../entities/genre";

export interface GenreGateway {
    create(genre: Genre): Promise<Genre>;
    find(genreId: string): Promise<Genre>;
    update(genre: Genre): Promise<Genre>;
    delete(genre: Genre): Promise<boolean>;
    isDeleted(genreId: string): Promise<boolean>;
    findAll(): Promise<Genre[]>;
}
