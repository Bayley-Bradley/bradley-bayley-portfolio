import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { FaLinkedinIn, FaAngleDown, FaAngleRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bradley Bayley | Portfolio</title>
      </Head>
      <main>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrayContainer}>
            <div className={styles.nameCenterpiece}>
              <h1 className={styles.hero__title}>
                Bradley
                <br />
                Bayley
              </h1>
            </div>
            <div>
              <h2 className={styles.hero__subtitle}>Software Developer</h2>
              <p className={styles.hero__description}>
                Hey, I’m Brad!
                <br />
                <br />I am a software developer based in Liverpool, UK. I am experienced with all stages of a project
                and have been known to dabble in design. I’d love to talk!
              </p>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
