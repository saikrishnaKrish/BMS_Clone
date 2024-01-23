import PropTypes from "prop-types";

const PageTitle = ({ title }) => {
  return <h1 className="text-xl uppercase">{title}</h1>;
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
