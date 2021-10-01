import React from 'react'
// import { withRouter } from "react-router-dom"
import './CarDetail.css'


class CarDetail extends React.Component {
    render() {
        return (
            <div className='CarDetail'>
                <h1>{this.props.match.params.name}</h1>
            </div>
       )
    }
}

export default CarDetail
