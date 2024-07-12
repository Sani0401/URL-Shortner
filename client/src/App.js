import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { pages } from './Pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<pages.Home />} />
      </Routes>
    </Router>
  );
}

export default App;
