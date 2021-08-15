import Link from 'next/link';
// import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.scss';

const HeroImage = () => (
  <div className={styles.hero}>
    <div className={styles.image} />
    <div className={styles.textBox}>
      <h1 className={styles.name}>Scott Anderson</h1>
    </div>
  </div>
);

const MainContent = () => (
  <main className={styles.main}>
    <h2>
      Staff Software Engineer at
      {' '}
      <Link href="https://www.usertesting.com">UserTesting</Link>
    </h2>
    <h2>
      ex-Principal Software Engineer at
      {' '}
      <Link href="https://www.skyscanner.net">Skyscanner</Link>
      .
    </h2>
  </main>
);

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroImage />
      {/* <Header /> */}
      <MainContent />
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      pageTitle: 'Hello',
    },
  };
}
