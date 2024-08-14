import styles from "@/styles/credits.module.css";
import Credit from "@/components/credit";
import Link from "next/link";
import {API_URL} from "@/app/constants";

async function getCredits(id : string){
    const detail_url = `${API_URL}/${id}/credits`;

    const response = await fetch(detail_url);
    return response.json();

}

export default async function Credits({params: {id}}:{params: {id: string}})
{
    const credits = await getCredits(id);

    return (
        <div>
            <div className={styles.title}>
                <h1>출연진 정보</h1>
            </div>
            <div className={styles.container_grid}>
                {credits.map((credit) => (
                    <Credit key={credit.id} name={credit.name} img_url={credit.profile_path} />
                ))}
            </div>
        </div>
    );
}