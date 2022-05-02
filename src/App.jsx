import React from 'react';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import { Routes,Route} from 'react-router-dom';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
