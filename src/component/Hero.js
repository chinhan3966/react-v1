import React from 'react'
import './Hero.css'


function Main({imageSrc}) {
    return (
        <div className="main">
            <img src={imageSrc} className="main__img"/>
            <h1>New York</h1>
        </div>
    )
}

export default Main
