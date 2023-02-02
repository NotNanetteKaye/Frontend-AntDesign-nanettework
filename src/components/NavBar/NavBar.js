import { Menu } from 'antd';
import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
`

const NavBar = () => {
    return (
        <div className='container-fluid'>
            <Header>
                <div className='logo'>
                    <a href='http://www.google.com'>ND</a>
                </div>
                <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['home']}>
                    <Menu.Item key='home'>Home</Menu.Item>
                    <Menu.Item key='about'>About</Menu.Item>
                    <Menu.Item key='portfolio'>Portfolio</Menu.Item>
                    <Menu.Item key='links'>Links</Menu.Item>
                </Menu>
            </Header>
        </div>
      );
}
 
export default NavBar;