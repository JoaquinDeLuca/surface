import './Spinner.css'

export default function Spinner({text = "Cargando productos..."}) {
  return (
    <div className='spinnerContainer'>
        <span className="spinnerLoader"></span>
        <p className='spinnerText'>{text}</p>
    </div>
  )
}
