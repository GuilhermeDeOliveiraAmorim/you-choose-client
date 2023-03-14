import { Genre } from "@/@core/domain/entities/genre";

interface IGenre {
    genre: Genre;
}

export default function GenreItem(props: IGenre) {
    const { genre } = props;
    return (
        <div>
            <p>{genre.name}</p>
            <img src={genre.picture} alt={genre.name} height="50" />
        </div>
    )
}
