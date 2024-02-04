import PropTypes from "prop-types";

const Button = ({ title, onClick, disabled, variant, fullWidth, type }) => {
  let className = "bg-primary p-1 text-white";

  if (fullWidth) {
    className += "w-full";
  }

  if (variant === "outlined") {
    className = className.replace(
      "bg-primary",
      "border border-primary text-primary bg-white"
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  fullWidth: PropTypes.string,
  type: PropTypes.string,
};

export default Button;
