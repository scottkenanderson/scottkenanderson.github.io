import PropTypes from 'prop-types';
import PageHead from './PageHead';

const Layout = ({ children, pageTitle }) => (
  <div>
    <PageHead>{pageTitle}</PageHead>
    { children }
  </div>
);

Layout.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]).isRequired,
  pageTitle: PropTypes.oneOf([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
  ]).isRequired,
};

export default Layout;
