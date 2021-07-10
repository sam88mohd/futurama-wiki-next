import Link from "next/link";
import styles from "../../styles/Character.module.css";
import Image from "next/image";

const url = "https://futuramaapi.herokuapp.com/api/v2/characters";

export const getStaticPaths = async () => {
  const res = await fetch(url);
  const data = await res.json();

  const paths = data.map((character) => {
    return {
      params: { character: character.Name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const character = context.params.character;
  const res = await fetch(
    `https://futuramaapi.herokuapp.com/api/v2/characters?search=${character}`
  );
  const [data] = await res.json();

  return {
    props: {
      character: data,
    },
  };
};

const Character = ({ character }) => {
  return (
    <div className={styles.container}>
      <h1>Character Details</h1>
      <div className={styles.card}>
        <Image src={character.PicUrl} alt="" width={400} height={400} />
        <p>Name: {character.Name}</p>
        <p>Age: {character.Age}</p>
        <p>First Appearance: {character.FirstAppearance}</p>
        <p>Status: {character.Status}</p>
        <p>Species: {character.Species}</p>
        <p>Relative: {character.Relatives}</p>
        <p>Planet: {character.Planet}</p>
      </div>
      <div className={styles.button}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
    </div>
  );
};

export default Character;
