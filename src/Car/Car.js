/* eslint-disable import/no-anonymous-default-export */
export default props => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: 10,
        display: 'block',
        padding: 10,
        boxShadow: '0 4px 5px 0 rgba(0, 0, 0, .2)',
        borderRadius: 5
    }}>
        <h2>Car name: {props.name}</h2>
        <p>Color: {props.color}</p>
        <p>Year: {props.year}</p>
        <input type="text" onChange={props.onChangeName} value={props.name}/>
        <button onClick={props.onDelete}>Delete</button>
    </div>
)
