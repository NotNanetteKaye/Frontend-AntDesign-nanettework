import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../NavBar/NavBar.css'

const NavBar = () => {
    return (
        <div className='navBar'>
            <div id='fixed'>
                <ul>
                    <li>
                        <Link to ='/home'>HOME</Link>
                    </li>
                </ul>
            </div>
        </div>
      );
}
 
export default NavBar;