import Image from "next/image";
import Navigation from "@/components/navigation";
import {Metadata} from "next";
import Link from "next/link";

export const metadata = {
    title: "Home"
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies(){
    //await new Promise((re) => setTimeout(re,10000));
    const response = await fetch(API_URL);
    const json = await response.json();

    //console.log("kuller");
    //console.log(json);
    return json;
}
export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div>
            {movies.map((movie) => (
                <li key={movie.id}>
                    <Link href={`/movie/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </div>
    );
}
