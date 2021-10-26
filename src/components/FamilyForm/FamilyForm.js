import './FamilyForm.css';
import MyInput from "../MyInput/MyInput";

function FamilyForm(props) {
  return (
    <section className='family-form'>
      <div className='family-form__container'>
        <form>
          <h2 className='family-form__title'>Персональные данные</h2>
          <MyInput placeholder='Имя' />
          <MyInput placeholder='Возраст' />
        </form>
      </div>
    </section>
  );
}

export default FamilyForm;
