/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import { NavLink } from "react-router-dom"
import "./Header.css"

export default props => {
    return (
        <div>
            <NavLink to="/" 
            exact 
            activeClassName={'wfm-active'} 
            className="Header"
            >Home</NavLink>
            <NavLink to="/about" className="Header" activeStyle={{color: 'blue'}}>About</NavLink>
            <NavLink 
            to={{
                pathname: '/cars',
                search: '?a=1&b=2',
                hash: 'wfm-hash'
            }} 
            className="Header"
            >Cars</NavLink>                     
        </div>
    )
}
