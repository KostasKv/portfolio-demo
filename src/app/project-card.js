import Image from "next/image";

import styles from "./page.module.css";

export function ProjectCard({ src, title, categories, year }) {
  return (
    <div className={styles.work__card}>
      <div className={styles.project__cover}>
        <Image src={src} alt="UIDeli.com design preview" placeholder="blur" />
      </div>
      <div className={styles.card__info}>
        <h4>{title}</h4>
        <p>
          <span className={styles.project__tag}>{categories.join(" + ")}</span>
          <span className={styles.project__year}>{year}</span>
        </p>
      </div>
    </div>
  );
}
