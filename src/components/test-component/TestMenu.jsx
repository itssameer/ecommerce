import React from 'react'
import './TestMenu.scss';

function TestMenu() {


    return (
        <div className="container">
            <div className="menu-items">
                <div className='background-image' style={{backgroundImage: `url(https://i.ibb.co/R70vBrQ/men.png)`}}/>
                <div className="menu">
                    <h1>Title</h1>
                    <span>description</span>
                </div>
            </div>
            <div className="menu-items">
                <div className="menu">
                    <h1>Title</h1>
                    <span>description</span>
                </div>
            </div>
            <div className="menu-items">
                <div className="menu">
                    <h1>Title</h1>
                    <span>description</span>
                </div>
            </div>
            <div className="menu-items">
                <div className="menu">
                    <h1>Title</h1>
                    <span>description</span>
                </div>
            </div>
        </div>
    )
}

export default TestMenu
