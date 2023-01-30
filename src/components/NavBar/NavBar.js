import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../NavBar/NavBar.css'

const NavBar = () => {
    return (
        <div className='navBar'>
            <div id='navBarFixed'>
                <h1>ND</h1>
                <ul>
                    <li>
                        <Link to ='/home'>HOME</Link>
                    </li>
                </ul>
            </div>
            <div id='navBarRemaining'></div>
        </div>
      );
}
 
export default NavBar;