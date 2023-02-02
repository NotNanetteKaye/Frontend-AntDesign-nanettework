import { Menu } from 'antd';
import React from 'react';
import styled from 'styled-components';

// Header also includes font-size for logo. Logo also has inline styling that will effect <Menu></Menu>
const Header = styled.div`
    display: flex;
    font-size: 40mm;
`

const NavBar = () => {
    return (
        <div className='container-fluid'>
            <Header>
                <div className='logo' style={{marginTop: '10mm',}}>
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