import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StdDbd from './Pages/StdDbd';
import ThrDbd from './Pages/ThrDbd';
import SignIn from './Pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/student" element={<StdDbd />} />
        <Route path="/teacher" element={<ThrDbd />} />
      </Routes>
    </Router>
  );
}

export default App;
