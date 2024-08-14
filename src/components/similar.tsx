import styles from "@/styles/similar.module.css";
import {API_URL} from "@/app/constants";

async function getSimilar(id:string){
    //await new Promise((re) => setTimeout(re,4000));

    const detail_url = `${API_URL}/${id}`;

    //throw new Error("Something broke...");
    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export default async function Similar ({id} : {id:string}) {
    const similars = await getSimilar(id);

    return (
        <div>
            <div className={styles.title}>
                <h1>추천작</h1>
            </div>
            <div className={styles.container}>
                {similars.map((similar) => (
                    <img
                        key={similar.id}
                        src={similar.poster_path}
                        alt={similar.original_title}
                        title={similar.original_title}
                    />
                ))}
            </div>
        </div>
    );
}
