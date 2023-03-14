import { Genre } from "@/@core/domain/entities/genre";
import GenreItem from "../item";

interface IGenreList {
    genres: Genre[];
}

export default function GenreList(props: IGenreList) {
    const { genres } = props;
    return (
        <div>
            {genres.map(genre =>
                <GenreItem key={genre.genre_id} genre={genre} />
            )}
        </div>
    )
}
