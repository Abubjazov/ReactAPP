/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import withClass from '../hoc/withClass'
import './Car.scss'

class Car extends React.Component {

    render() {
        const inputClasses = ['input']

        if (this.props.name) {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if (this.props.name.length > 4) {
            inputClasses.push('bold')
        }

        return (
        <React.Fragment>
            <h2>Car name: {this.props.name}</h2>
            <p>Color: {this.props.color}</p>
            <p>Year: {this.props.year}</p>
            <input 
            type="text" 
            onChange={this.props.onChangeName} 
            value={this.props.name}
            className={inputClasses.join(' ')}
            />
            <button onClick={this.props.onDelete}>Delete</button>
        </React.Fragment>
        )
    }
}

export default withClass(Car, 'Car')
