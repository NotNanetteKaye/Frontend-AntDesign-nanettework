// General Imports
import {Route, Routes} from 'react-router-dom'

// Styling Imports
import './App.css';

// Pages Imports

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
