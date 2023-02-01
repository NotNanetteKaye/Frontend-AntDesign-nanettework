import { Menu } from 'antd';
import React from 'react';

const NavBar = () => {
    return (
        <div className='container-fluid'>
            <div className='NavBar'>
                <div className='logo'>
                    <Menu mode='horizontal' defaultSelectedKeys={['2']}>
                        <Menu.Item key='1'>Home</Menu.Item>
                        <Menu.Item key='2'>About</Menu.Item>
                        <Menu.Item key='3'>Portfolio</Menu.Item>
                        <Menu.Item key='4'>Links</Menu.Item>
                    </Menu>
                </div>
            </div>
        </div>
      );
}
 
export default NavBar;