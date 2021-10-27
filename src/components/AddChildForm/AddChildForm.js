import React, {useEffect, useState} from 'react';
import './AddChildForm.css';
import MyInput from "../MyInput/MyInput";

function AddChildForm({setIsShowAddForm, addChild}) {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')

  useEffect(() => {
    const escape = (evt) => {
      if (evt.key === 'Escape') {
        setIsShowAddForm(false)
      }
    }

    document.addEventListener('keydown', escape)

    return () => {
      document.removeEventListener('keydown', escape)
    }
  }, [setIsShowAddForm])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addChild({
      name,
      age
    })
    setIsShowAddForm(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='family-form__row'>
        <MyInput
          onChange={(evt => setName(evt.target.value))}
          placeholder='Имя'
          value={name || ''}
          width='260'
        />
        <MyInput
          onChange={(evt => setAge(evt.target.value))}
          placeholder='Возраст'
          value={age || ''}
          width='260'
        />
        <button
          style={{
            visibility: 'hidden',
            pointerEvents: 'none'
          }}
          className='child-list__remove-btn'
        >
          Удалить
        </button>
      </div>
      <button
        type='submit'
        className='add-form__save-btn'
      >
        Сохранить
      </button>
    </form>
  );
}

export default AddChildForm;
