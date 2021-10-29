import './FamilyForm.css';
import MyInput from "../MyInput/MyInput";
import plus from '../../images/plus.svg'
import ChildList from "../ChildList/ChildList";
import AddChildForm from "../AddChildForm/AddChildForm";
import {useState} from "react";

function FamilyForm({parent, children, addChild, removeChild, handleParentChange, handleChildrenChange}) {
  const [isShowAddForm, setIsShowAddForm] = useState(false);

  return (
    <section className='family-form'>
      <div className='family-form__container'>
        <h2 className='family-form__title'>Персональные данные 123</h2>
        <MyInput placeholder='Имя' name='name' value={parent.name} onChange={handleParentChange}/>
        <MyInput placeholder='Возраст' name='age' value={parent.age} onChange={handleParentChange}/>

        <div className='family-form__row'>
          <h2 className='family-form__title'>Дети (макс. 5)</h2>
          <button
            onClick={() => setIsShowAddForm(true)}
            className={`family-form__add-btn ${children.length < 5 ? '' : 'family-form__add-btn_disabled'}`}
          >
            <img
              className='family-form__img-btn'
              src={plus}
              alt=""
            />
            Добавить ребенка
          </button>
        </div>

        <ChildList children={children} removeChild={removeChild} handleChildrenChange={handleChildrenChange}/>

        {isShowAddForm && <AddChildForm setIsShowAddForm={setIsShowAddForm} addChild={addChild}/>}
      </div>
    </section>
  );
}

export default FamilyForm;
