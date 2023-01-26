// General Imports
import {Route, Routes} from 'react-router-dom'

// Styling Imports
import './App.css';

// Pages Imports
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>

    </div>
  );
}

export default App;
