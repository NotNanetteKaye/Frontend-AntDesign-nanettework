// General Imports
import {Route, Routes} from 'react-router-dom'

// Styling Imports
import './App.css';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';

// Components Imports
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>

    </div>
  );
}

export default App;
