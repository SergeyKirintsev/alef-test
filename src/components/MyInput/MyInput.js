import './MyInput.css';

function MyInput({placeholder, value = '', width, onChange, name, readOnly = false}) {
  const inputStyle = {
    width: width ? +width : '100%'
  }

  return (
    <div className="my-input__wrap">
      <input
        name={name}
        onChange={onChange}
        value={value}
        className='my-input'
        required
        style={inputStyle}
        readOnly={readOnly}
      />
      <label className='my-input__label'>{placeholder}</label>
    </div>
  );
}

export default MyInput;
