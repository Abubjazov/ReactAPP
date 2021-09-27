/* eslint-disable import/no-anonymous-default-export */
// function Car(props) {
//     return (
//         <div>
//             <h2>Car name: {props.name}</h2>
//             <p>Color: {props.color}</p>
//             <p>Year: {props.year}</p>
//         </div>
//     )
// }

// const car = () => {
//     return (
//         <h2>This is Car2</h2>
//     )
// }

// const car = () => <h2>This is Car3</h2>

// const car = () => (
//     <div>
//         <h2>This is Car3</h2>
//         <h2>This is Car4</h2>
//     </div>
// )

// export default () => (
//     <div>
//         <h2>This is Car3</h2>
//         <h2>This is Car4</h2>
//     </div>
// )
export default props => (
    <div>
        <h2>Car name: {props.name}</h2>
        <p>Color: {props.color}</p>
        <p>Year: {props.year}</p>
        { props.children }
    </div>
)
