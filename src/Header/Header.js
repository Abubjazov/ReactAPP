/* eslint-disable import/no-anonymous-default-export */
import React from "react"
import "./Header.css"

export default props => {
    return (
        <div>
            <a href="/" className="Header">Home</a>
            <a href="/about" className="Header">About</a>
            <a href="/cars" className="Header">Cars</a>                     
        </div>
    )
}
