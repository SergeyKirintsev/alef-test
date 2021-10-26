import './MyInput.css';

function MyInput({placeholder}) {
  return (
    <div className="my-input__wrap">
      <input className='my-input' required />
      <label className='my-input__label'>{placeholder}</label>
    </div>
  );
}

export default MyInput;
