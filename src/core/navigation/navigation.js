import React, { Component } from "react";
import { NavLink } from 'react-router-dom'

import './navigation.css'
import pageList from "../../constants/pages";

class Navigation extends Component {
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
        return (
        <div className="navbar">
            <ul>
                {pageList.map(page => {
                    return this.navBut(page)
                })}
                
            </ul>
        </div>
        );
    }
}
  
  export default Navigation;
  