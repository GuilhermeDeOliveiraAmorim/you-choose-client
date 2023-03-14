import { FindAllGenreUseCase } from "@/@core/application/genre/findall.genre.usecase"
import { Genre } from "@/@core/domain/entities/genre"
import { GenreHttpGateway } from "@/@core/infra/genre.http.gateway"
import GenreCreate from "@/components/admin/genre/create"
import GenreList from "@/components/admin/genre/list"
import { http } from "@/util/http"
import { GetServerSideProps } from "next"

interface IGenres {
    genres: Genre[];
}

export default function Genres(props: IGenres) {
    const { genres } = props;
    return (
        <>
            <GenreCreate />
            <GenreList genres={genres} />
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