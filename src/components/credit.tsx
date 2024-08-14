import styles from "@/styles/credits.module.css";
interface ICredit {
    name: string;
    img_url: string;
}
export default function Credit({name, img_url} : ICredit) {
    return (
        <div className={styles.credit}>
            <img src={img_url} alt={name} />
            <span>{name}</span>
        </div>
    );
}
