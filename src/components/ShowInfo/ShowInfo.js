import './ShowInfo.css'

function ShowInfo({name, age, style}) {
  return (
    <li
      style={style}
      className='info__item'
    >
      {`${name}, ${age} лет`}
    </li>
  )
}

export default ShowInfo
