import Image from "next/image";
import Navigation from "@/components/navigation";
import {Metadata} from "next";
import Link from "next/link";
import Movie from "@/components/Movie";
import styles from "../../styles/home.module.css";

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
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />
            ))}
        </div>
    );
}
