import styles from "@/styles/movie-videos.module.css";
import {API_URL} from "@/app/constants";

async function getVideos(id:string){
    //await new Promise((re) => setTimeout(re,4000));

    const detail_url = `${API_URL}/${id}`;

    //throw new Error("Something broke...");
    const response = await fetch(`${API_URL}/${id}/videos`);
    return response.json();
}

export default async function MovieVideos ({id} : {id:string}) {
    const videos = await getVideos(id);

    return (
        <div className={styles.container}>
            {videos.map((video : {id:string, key:string, name:string}) => (
                <iframe key={video.id}
                        src={`https://youtube.com/embed/${video.key}`}
                        title={video.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen />
            ))}
        </div>
    );
}
