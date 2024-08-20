import Movie from "@/components/Movie";
import styles from "../../styles/home.module.css";
import {API_URL} from "@/app/constants";

export const metadata = {
    title: "Home"
}

async function getMovies(){
    //await new Promise((re) => setTimeout(re,10000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}
export default async function HomePage() {
    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie : {id:string, title:string, poster_path:string}) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                />
            ))}
        </div>
    );
}
