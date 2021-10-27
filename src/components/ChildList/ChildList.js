import React from 'react';
import MyInput from "../MyInput/MyInput";
import './ChildList.css';

function ChildList({children, removeChild}) {
  return (
    <>
      {children.length > 0 && children.map(child => (
        <div key={child.id} className='family-form__row'>
          <MyInput
            placeholder='Имя'
            value={child.name}
            width='260'
            readOnly={true}
          />
          <MyInput
            placeholder='Возраст'
            value={child.age}
            width='260'
            readOnly={true}
          />
          <button
            onClick={() => removeChild(child.id)}
            className='child-list__remove-btn'
          >
            Удалить
          </button>
        </div>
      ))}
    </>
  );
}

export default ChildList;
