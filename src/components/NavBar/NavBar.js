import { Menu } from 'antd';
import React from 'react';
import styled from 'styled-components';

// Header also includes font-size for logo. Logo also has inline styling that will effect <Menu></Menu>
const Header = styled.div`
    font-size: 40mm;
    justify-content: space-between;
    flex-wrap: wrap;
    display: flex;
`

// const headerStyle = {
//     textAlign: 'center',
//     color: 'pink',
//     height: 164,
//     // paddingInline: 50,
//     lineHeight: '64px',
//     backgroundColor: 'pink',
//     width: '100%',
//   };

const NavBar = () => {
    return (
        <div className='container-fluid'>
            <Header>
                <div className='logo' style={{marginTop: '12mm',}}>
                    <a href='http://www.google.com'>ND</a>
                </div>
                <Menu style={{color: 'pink', backgroundColor: 'green', fontSize: '10mm', marginTop:'6mm',}} mode='horizontal'>
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