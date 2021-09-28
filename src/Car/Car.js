/* eslint-disable import/no-anonymous-default-export */
import Radium from 'radium'
import './Car.css' 

const Car = props => {
    const inputClasses = ['input']

    if (props.name) {
        inputClasses.push('green')
    } else {
        inputClasses.push('red')
    }

    if (props.name.length > 4) {
        inputClasses.push('bold')
    }

    const style = {
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .2)',
        border: '1px solid #ccc',
        ':hover': {
            border: '2px solid #aaa',
            boxShadow: '0 4px 15 px rgba(0, 0, 0, .25)',
            backgroundColor:'yellow',
            cursor: 'pointer'
        }
    }

    return (
    <div className='Car' style={style}>
        <h2>Car name: {props.name}</h2>
        <p>Color: {props.color}</p>
        <p>Year: {props.year}</p>
        <input 
        type="text" 
        onChange={props.onChangeName} 
        value={props.name}
        className={inputClasses.join(' ')}
        />
        <button onClick={props.onDelete}>Delete</button>
    </div>
)
    }

export default Radium(Car)
