/* eslint-disable import/no-anonymous-default-export */
import './Car.css' 
export default props => (
    <div className='Car'>
        <h2>Car name: {props.name}</h2>
        <p>Color: {props.color}</p>
        <p>Year: {props.year}</p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)
