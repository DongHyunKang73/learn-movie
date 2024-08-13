import {API_URL} from "@/app/(home)/page";

async function getMovie(id:string){
    await new Promise((re) => setTimeout(re,2000));

    const detail_url = `${API_URL}/${id}`;

    const response = await fetch(detail_url);
    return response.json();
}

export default async function MovieInfo({id} : {id:string}) {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>
}
