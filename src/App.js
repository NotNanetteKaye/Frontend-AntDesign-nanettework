// General Imports
import {Route, Routes} from 'react-router-dom'

// Styling Imports
import './App.css';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';

// Components Imports
// import NavBar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';

// Layout Imports
import { Layout, Menu, } from 'antd';
const { Header } = Layout;


function App() {
  return (
    <Layout>
      <Header>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
          <Menu.Item key='1'>Home</Menu.Item>
          <Menu.Item key='2'>About</Menu.Item>
          <Menu.Item key='3'>Portfolio</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

export default App;
