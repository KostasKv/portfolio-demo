import styles from "./page.module.css";

export function CategorySelector({ selected, onSelect }) {
  return (
    <ol className={`${styles.categories} ${styles.flex}`}>
      <li selected={true}>
        <input
          type="radio"
          id="all"
          className={styles.input}
          onChange={(e) => onSelect(e.target.id)}
          checked={selected === "all"}
        />
        <label htmlFor="all">All</label>
      </li>
      <li>
        <input
          type="radio"
          id="design"
          className={styles.input}
          checked={selected === "design"}
          onChange={(e) => onSelect(e.target.id)}
        />
        <label htmlFor="design">Design</label>
      </li>
      <li>
        <input
          type="radio"
          id="development"
          className={styles.input}
          checked={selected === "development"}
          onChange={(e) => onSelect(e.target.id)}
        />
        <label htmlFor="development">Development</label>
      </li>
    </ol>
  );
}
