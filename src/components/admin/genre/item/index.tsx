import { Genre } from "@/@core/domain/entities/genre";

interface IGenre {
    genre: Genre;
}

export default function GenreItem(props: IGenre) {
    const { genre } = props;
    return (
        <div key={genre.genre_id} style={{ backgroundColor: "gray", padding: 5 }}>
            <p>{genre.name}</p>
            <img src={genre.picture} alt={genre.name} height="50" />
        </div>
    )
}
