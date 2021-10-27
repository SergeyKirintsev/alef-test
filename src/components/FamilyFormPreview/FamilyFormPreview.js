import ShowInfo from "../ShowInfo/ShowInfo";

function FamilyFormPreview({parent, children}) {
  return (
    <section className='family-form'>
      <div className='family-form__container'>
        <h2 className='family-form__title'>Персональные данные</h2>
        <ul className='info__list'>
          {ShowInfo(parent)}
        </ul>
        <h2 className='family-form__title'>Дети</h2>
        <ul className='info__list'>
          {children.length > 0 && children.map(el =>
            <ShowInfo
              name={el.name}
              age={el.age}
              style={{
                backgroundColor: '#F1F1F1',
                padding: '10px 20px'
              }}
            />
          )}
        </ul>
      </div>
    </section>
  );
}

export default FamilyFormPreview;
