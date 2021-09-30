/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
// import Radium from 'radium'
import './Car.scss'

class Car extends React.Component {
    componentWillReciveProps(nextProps) {
        console.log(`Car componentWillRecieveProps: `, nextProps)
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(`Car shouldComponentUpdate: `, nextProps, nextState)
        return nextProps.name.trim() !== this.props.name.trim()
    }

    componentWillUpdate(nextProps, nextState) {
        console.log(`Car componentWillUpdate: `, nextProps, nextState)
    }

    componentDidUpdate() {
        console.log(`Car componentDidUpdate`)
    }

    render() {
        console.log(`Car Render`)
        const inputClasses = ['input']

        if (this.props.name) {
            inputClasses.push('green')
        } else {
            inputClasses.push('red')
        }

        if (this.props.name.length > 4) {
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
        </div>
        )
    }
}

export default Car
