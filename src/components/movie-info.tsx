import styles from "@/styles/movie-info.module.css";
import {API_URL} from "@/app/constants";

export async function getMovie(id:string){
    //await new Promise((re) => setTimeout(re,2000));

    const detail_url = `${API_URL}/${id}`;

    const response = await fetch(detail_url);
    return response.json();
}

async function getProviders(id : string){
    const detail_url = `${API_URL}/${id}/providers`;

    const response = await fetch(detail_url);

    return response.json();
}

export default async function MovieInfo({id} : {id:string}) {
    const movie = await getMovie(id);
    const providers = await getProviders(id);
    return (
        <div className={styles.container}>
            <img className={styles.poster} src={movie.poster_path} alt={movie.title} />
            <div className={styles.info}>
                <h1 className={styles.title}>{movie.title}</h1>
                <h3>⭐{movie.vote_average.toFixed(1)}</h3>
                <p className={styles.info}>{movie.overview}</p>
                <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
                <div className={styles.company}>
                    {movie.production_companies.map((company) => (
                        <img className={styles.company_logo}
                             key={company.id}
                             src={company.logo_path}
                             alt={company.name}
                             onerror="this.style.display='none'" />
                    ))}
                </div>
                <div>
                    <span>Rent</span>
                </div>
                <div className={styles.provider}>
                    {
                        providers.KR.rent.map((rent) => (
                        <img
                            key={rent.provider_id}
                            src={rent.logo_path}
                            alt={rent.provider_name}
                            title={rent.provider_name}
                        />
                    ))}
                </div>
                <div>
                    <span>Buy</span>
                </div>
                <div className={styles.provider}>
                    {
                        providers.KR.buy.map((buy) => (
                            <img
                                key={buy.provider_id}
                                src={buy.logo_path}
                                alt={buy.provider_name}
                                title={buy.provider_name}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}
