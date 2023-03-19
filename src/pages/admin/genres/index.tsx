import { AddPictureToGenreUseCase } from "@/@core/application/genre/add.picture.to.genre.usecase"
import { CreateGenreUseCase } from "@/@core/application/genre/create.genre.usecase"
import { FindGenreUseCase } from "@/@core/application/genre/find.genre.usecase"
import { FindAllGenreUseCase } from "@/@core/application/genre/findall.genre.usecase"
import { Genre } from "@/@core/domain/entities/genre"
import { GenreHttpGateway } from "@/@core/infra/genre.http.gateway"
import { http } from "@/util/http"
import { GetServerSideProps } from "next"
import { FormEvent, useState } from "react"

interface IGenres {
    genres: Genre[];
}

export default function Genres(props: IGenres) {
    const { genres } = props;

    const [name, setName] = useState("");
    const [files, setFiles] = useState<FileList | null>();

    const [genresArray, setGenresArray] = useState<Genre[]>(genres);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (name === "") {
            console.log("Please enter a name");
            return;
        }

        if (files === null || files?.length === 0) {
            console.log("No files to submit to upload");
            return;
        }

        try {
            const gateWay = new GenreHttpGateway(http);
            const usecaseCreate = new CreateGenreUseCase(gateWay);
            const useCaseAddPicture = new AddPictureToGenreUseCase(gateWay);

            const newGenre = await usecaseCreate.execute(name);

            if (files?.item(0) !== null && files?.item(0) !== undefined) {
                const file = files.item(0);
                await useCaseAddPicture.execute(newGenre.props.genre_id, file);

                const gateWay = new GenreHttpGateway(http);
                const findUseCase = new FindGenreUseCase(gateWay);
                const genre = await findUseCase.execute(newGenre.props.genre_id);

                genresArray.unshift(genre);
                setGenresArray(genresArray);
            }

        } catch (error) {

        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <input type="text" onChange={(event) => setName(event.target.value)} />
                    <input type="file" onChange={(event) => setFiles(event.target.files)} multiple />
                    <button type="submit">Criar</button>
                </form>
            </div>
            <ul style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {genresArray.map(genre =>
                    <li key={genre.genre_id} style={{ backgroundColor: "gray", padding: 5 }}>
                        <p>{genre.name}</p>
                        <img src={genre.picture} alt={genre.name} height="50" />
                    </li>
                )}
            </ul>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
    const gateWay = new GenreHttpGateway(http)
    const useCase = new FindAllGenreUseCase(gateWay);

    const genres = await useCase.execute();

    return {
        props: genres
    };
}