/* eslint-disable import/no-anonymous-default-export */
export default props => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '10px',
        display: 'block',
        padding: '10px'
    }}>
        <h2>Car name: {props.name}</h2>
        <p>Color: {props.color}</p>
        <p>Year: {props.year}</p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)
