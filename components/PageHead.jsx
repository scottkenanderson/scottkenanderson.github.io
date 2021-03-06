import Head from 'next/head';
import PropTypes from 'prop-types';

const PageHead = ({ children }) => (
  <Head>
    <title>
      { children }
      { children ? ' | ' : ''}
      { 'scott-anderson.net'}
    </title>
    <link rel="icon" href="/favicon.ico" />
    <meta name="description" content="Personal website of Scott Anderson" />
  </Head>
);

PageHead.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]).isRequired,
};

export default PageHead;
