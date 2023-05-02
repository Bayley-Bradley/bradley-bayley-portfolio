import styles from "./Navbar.module.css";
import Link from "next/link";
import { MdDownload } from "react-icons/md";

export default function Navbar() {
  return (
    <nav className={styles.navigationContainer}>
      <Link href="/" className={styles.logo}>
        <h3>Bradley Bayley</h3>
      </Link>
      <ul className={styles.listContainer}>
        <li className={styles.listItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">About</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">Resume</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">Portfolio</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">Contact</Link>
        </li>
        <li className={styles.listItem}>
          <Link href={"/"} className={styles.button}>
            <p>Download CV</p>
            <MdDownload size={22} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
