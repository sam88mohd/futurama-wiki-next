/* eslint-disable @next/next/link-passhref */
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

const url = "https://futuramaapi.herokuapp.com/api/v2/characters";

export const getStaticProps = async () => {
  const res = await fetch(url);
  const data = await res.json();

  return {
    props: {
      characters: data,
    },
  };
};

export default function Home({ characters }) {
  // console.log("characters", characters);

  const createSlug = (name) => {
    const n = name.slice(0, name.indexOf(" "));
    return n;
  };

  return (
    <div className={styles.main}>
      <h2>Character List</h2>
      <div className={styles.grid}>
        {characters.map((character, index) => {
          const { Name, PicUrl } = character;
          return (
            <li key={index} className={styles.card}>
              <Link href={`/character/${Name}`}>
                <a>
                  <Image src={PicUrl} alt="" width={150} height={150} />
                  <h3>{Name}</h3>
                </a>
              </Link>
            </li>
          );
        })}
      </div>
    </div>
  );
}
