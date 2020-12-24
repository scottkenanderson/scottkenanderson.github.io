import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const HeaderLink = ({ href, children }) => (
  <Link href={href}>
    <a className={styles.link}>{children}</a>
  </Link>
);

HeaderLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]).isRequired,
};

HeaderLink.defaultProps = {
  href: '/',
};

const Header = () => (
  <div className={styles.container}>
    <HeaderLink href="/">Home</HeaderLink>
    <HeaderLink href="/about">About</HeaderLink>
    <HeaderLink href="/contact">Contact</HeaderLink>
  </div>
);

export default Header;
