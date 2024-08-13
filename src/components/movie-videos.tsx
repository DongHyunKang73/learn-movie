import {API_URL} from "@/app/(home)/page";

async function getVideos(id:string){
    await new Promise((re) => setTimeout(re,4000));

    const detail_url = `${API_URL}/${id}`;

    throw new Error("Something broke...");
    //const response = await fetch(`${API_URL}/${id}/videos`);
    //return response.json();
}

export default async function MovieVideos ({id} : {id:string}) {
    const videos = await getVideos(id);

    return <h6>{JSON.stringify(videos)}</h6>
}
