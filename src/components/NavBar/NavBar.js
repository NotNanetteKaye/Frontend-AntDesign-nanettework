import { Menu } from 'antd';
import React from 'react';

const NavBar = () => {
    return (
        <div className='container-fluid'>
            <div className='NavBar'>
                <div className='logo'>
                    <a href='http://www.google.com'>ND</a>
                </div>
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['home']}>
                    <Menu.Item key='home'>Home</Menu.Item>
                    <Menu.Item key='about'>About</Menu.Item>
                    <Menu.Item key='portfolio'>Portfolio</Menu.Item>
                    <Menu.Item key='links'>Links</Menu.Item>
                </Menu>
            </div>
        </div>
      );
}
 
export default NavBar;