import Link from 'next/link';
// import PageHead from '../components/PageHead';
import Header from '../components/Header';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.image} />
        <h1 className={styles.name}>Scott Anderson</h1>
      </div>
      <Header />
      <main className={styles.main}>
        <h2>
          Principal Software Engineer at
          {' '}
          <Link href="https://www.skyscanner.net">Skyscanner</Link>
          .
        </h2>
      </main>

      <footer className={styles.footer}>
        <Link href="https://www.linkedin.com/in/scottkenanderson/">LinkedIn</Link>
      </footer>
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
