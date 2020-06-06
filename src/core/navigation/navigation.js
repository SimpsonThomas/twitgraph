import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import './navigation.css'

class Navigation extends Component {
    constructor(props) {
        super(props)
        const test = {
            name : 'Test',
            link : '/test'
        }
    }

    /**
     * Generates the buttons for the navbar
     * 
     * @param {*} item - the dictionary containing the name and link of the navbar item we are creating
     * @param {*} navClass - any special classes for this nav-item
     */
    navBut(item, navClass='') {
        return (
            <li className='nav-item' key={item.name}>
                <NavLink 
                    className={navClass+" nav-link "+item.name}
                    id={item.link.split('/')[1]+'NavLink'}
                    to={item.link}
                >
                    {item.name}
                </NavLink>
            </li>
        )
    }

    render() {
        const test = {
            name : 'Test',
            link : '/test'
        }
        console.log(test)
        return (
        <div className="navbar">
            <ul>
                {this.navBut(test)}
                {this.navBut(test)}
                
            </ul>
        </div>
        );
    }
}
  
  export default Navigation;
  