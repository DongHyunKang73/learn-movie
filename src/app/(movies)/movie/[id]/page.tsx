import MovieVideos from "@/components/movie-videos";
import MovieInfo, {getMovie} from "@/components/movie-info";
import {Suspense} from "react";
import Credits from "@/components/credits";
import Similar from "@/components/similar";

interface IParams {
    params: {id : string};
}

export async function generateMetadata({params: {id}} : IParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title
    }
}
export default async function MovieDetail({params: {id}}: IParams)
{
    return (
        <div>
            <Suspense fallback={<h1>Loading MovieInfo..</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading Credits..</h1>}>
                <Credits id={id} max_cnt={7} />
            </Suspense>
            <Suspense fallback={<h1>Loading Videos..</h1>}>
                <MovieVideos id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading Similar..</h1>}>
                <Similar id={id} />
            </Suspense>
        </div>
    );
}
