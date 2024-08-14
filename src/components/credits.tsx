import styles from "@/styles/credits.module.css";
import Credit from "@/components/credit";
import Link from "next/link";
import {API_URL} from "@/app/constants";

async function getCredits(id : string){
    const detail_url = `${API_URL}/${id}/credits`;

    const response = await fetch(detail_url);
    return response.json();
}

export default async function Credits({id, max_cnt} : {id : string, max_cnt : number})
{
    const credits = await getCredits(id);
    let display = 0;

    return (
        <div>
            <div className={styles.title}>
                <h1>출연진 정보</h1>
            </div>
            <div className={styles.container_flex}>
                {credits.map((credit) => {
                    display++;

                    if(display === max_cnt)
                        return <Link key={"1"} href={`/movie/${id}/credits`}>&rarr;</Link>;
                    else if(display < max_cnt)
                        return <Credit key={credit.id} name={credit.name} img_url={credit.profile_path} />;
                    else
                        return null;
                    }
                )}
            </div>
        </div>
    );
}