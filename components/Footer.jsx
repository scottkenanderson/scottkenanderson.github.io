import Link from 'next/link';
import styles from '../styles/Footer.module.scss';

const LinkedIn = () => (
  <Link href="https://www.linkedin.com/in/scottkenanderson/" className={styles.socialMediaLink}>
    <a>
      <div className={styles.socialMediaLink__linkedIn} />
      LinkedIn
    </a>
  </Link>
);

const Github = () => (
  <Link href="https://github.com/scottkenanderson/" className={styles.socialMediaLink}>
    <a>
      <div className={styles.socialMediaLink__github} />
      GitHub
    </a>
  </Link>
);

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.socialMediaLinks}>
      <LinkedIn />
      <Github />
    </div>
  </footer>
);

export default Footer;
