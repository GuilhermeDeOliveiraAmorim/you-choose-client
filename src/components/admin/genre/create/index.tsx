import { AddPictureToGenreUseCase } from "@/@core/application/genre/add.picture.to.genre.usecase";
import { CreateGenreUseCase } from "@/@core/application/genre/create.genre.usecase";
import { GenreHttpGateway } from "@/@core/infra/genre.http.gateway";
import { http } from "@/util/http";
import { FormEvent, useState } from "react";

export default function GenreCreate() {
    const [name, setName] = useState("");
    const [files, setFiles] = useState<FileList | null>();

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
            }

        } catch (error) {

        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(event) => setName(event.target.value)} />
                <input type="file" onChange={(event) => setFiles(event.target.files)} multiple />
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}
