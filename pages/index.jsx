import Head from "next/head";
import styles from "../styles/Home.module.css";
import Banner from "../components/banner";
import Image from "next/image";
import Card from "../components/card";

import coffeeStoreData from "../data/coffee-stores.json";

export async function getStaticProps(context) {
  return {
    props: {
      coffeeStores: coffeeStoreData,
    },
  };
}

export default function Home(props) {
  const handleOnBannerBtnClick = () => {
    console.log("click  button on banner");
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Connoisseur</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Banner buttonText="View stores nearly" handleOnClick={handleOnBannerBtnClick} />
        <div className={styles.heroImage}>
          <Image src="/static/hero-image.png" width={700} height={400} alt="Hero Image" />
        </div>

        {props?.coffeeStores.length > 0 && (
          <>
            <h2 className={styles.heading2}>Toronto stores</h2>
            <div className={styles.cardLayout}>
              {props?.coffeeStores.map((coffeeStores) => {
                return (
                  <Card
                    key={coffeeStores.id}
                    name={coffeeStores.name}
                    imgUrl={coffeeStores.imgUrl}
                    href={`/coffee-store/${coffeeStores.id}`}
                    className={styles.card}
                  />
                );
              })}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
