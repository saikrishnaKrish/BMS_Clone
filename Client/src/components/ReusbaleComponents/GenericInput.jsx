import PropTypes from "prop-types"

const GenericInput = ({
  label,
  id,
  placeholder,
  type,
  className,
   value,
  onChange,
  onKeyDown
}) => {
  return (
    <>
      <div className={className} >
        <label>{label}</label>
        <input type={type} id={id}onKeyDown={onKeyDown} onChange={onChange} value={value} placeholder={placeholder} />
      </div>
    </>
  );
};

GenericInput.propTypes={
        id:PropTypes.string,
        label:PropTypes.string,
        placeholder:PropTypes.string,
        type:PropTypes.string,
        className:PropTypes.string,
        styles:PropTypes.object,
        value:PropTypes.string || PropTypes.number,
        onChange:PropTypes.func,
        onKeyDown:PropTypes.func
}
export default GenericInput;

