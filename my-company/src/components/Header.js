import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="nav-bar">
                <div className="left-nav-bar">logo</div>
                <div className="middle"><ul className="middle-nav-bar">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Products</li>
                    </ul>
                </div>
                <div className="right-nav-bar">Contact Us</div>
            </div>
        )
    }
}
