import {API_URL} from "../../../(home)/page";
import MovieVideos from "@/components/movie-videos";
import MovieInfo from "@/components/movie-info";
import {Suspense} from "react";

export default async function MovieDetail({params: {id}}: { params: { id: string } })
{
    return (
        <div>
            <h1>{id}</h1>
            <h4>Movie Detail</h4>
            <Suspense fallback={<h1>Loading MovieInfo..</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <h4>Videos Detail</h4>
            <Suspense fallback={<h1>Loading Videos..</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}
