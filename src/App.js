// General Imports
import {Route, Routes} from 'react-router-dom'

// Styling Imports
import './App.css';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';

// Components Imports
import NavBar from './components/NavBar/NavBar';
// import Footer from './components/Footer/Footer';

// Layout Imports
import { Layout } from 'antd';
const { Header } = Layout;


function App() {
  return (
    <Layout className='layout'>
      <Header  style={{backgroundColor: "red", height:"24mm"}}>
        <NavBar />
      </Header>
    </Layout>
  );
}

export default App;
