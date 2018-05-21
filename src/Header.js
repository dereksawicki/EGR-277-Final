import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import './App.css';

class Header extends Component {


  render() {
    return (
      <nav className="header">
         <div>
            <ul>
              <li className="nav-item"><NavLink to='/gallery' activeClassName="nav-link-header-active" className="nav-link-header">GALLERY</NavLink></li>          
 <li className="nav-item"><NavLink to='/' exact activeClassName="nav-link-header-active" className="nav-link-header ">STORYMAP</NavLink></li>
 
            </ul>
          </div>
      </nav>
    );
  }
}

export default Header;
            // 

