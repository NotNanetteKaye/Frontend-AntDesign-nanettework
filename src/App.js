// General Imports
import {Route, Routes} from 'react-router-dom'

// Styling Imports
import './App.css';

// Pages Imports
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
      <h1>hi bby</h1>
    </div>
  );
}

export default App;
