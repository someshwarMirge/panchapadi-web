import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Prarthana from './pages/Prarthana';
import Aarti1 from './pages/Aarti1';
import Aarti2 from './pages/Aarti2';
import Aarti3 from './pages/Aarti3';
import Aarti4 from './pages/Aarti4';
import Aarti5 from './pages/Aarti5';
import Aarti6 from './pages/Aarti6';
import Aarti7 from './pages/Aarti7';
import Aarti8 from './pages/Aarti8';
import Aarti9 from './pages/Aarti9';
import Aarti10 from './pages/Aarti10';
import Aarti11 from './pages/Aarti11';
import Aarti12 from './pages/Aarti12';
import Aarti13 from './pages/Aarti13';
import Aarti14 from './pages/Aarti14';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/prarthana" element={<ProtectedRoute><Prarthana /></ProtectedRoute>} />
          <Route path="/aarti1" element={<ProtectedRoute><Aarti1 /></ProtectedRoute>} />
          <Route path="/aarti2" element={<ProtectedRoute><Aarti2 /></ProtectedRoute>} />
          <Route path="/aarti3" element={<ProtectedRoute><Aarti3 /></ProtectedRoute>} />
          <Route path="/aarti4" element={<ProtectedRoute><Aarti4 /></ProtectedRoute>} />
          <Route path="/aarti5" element={<ProtectedRoute><Aarti5 /></ProtectedRoute>} />
          <Route path="/aarti6" element={<ProtectedRoute><Aarti6 /></ProtectedRoute>} />
          <Route path="/aarti7" element={<ProtectedRoute><Aarti7 /></ProtectedRoute>} />
          <Route path="/aarti8" element={<ProtectedRoute><Aarti8 /></ProtectedRoute>} />
          <Route path="/aarti9" element={<ProtectedRoute><Aarti9 /></ProtectedRoute>} />
          <Route path="/aarti10" element={<ProtectedRoute><Aarti10 /></ProtectedRoute>} />
          <Route path="/aarti11" element={<ProtectedRoute><Aarti11 /></ProtectedRoute>} />
          <Route path="/aarti12" element={<ProtectedRoute><Aarti12 /></ProtectedRoute>} />
          <Route path="/aarti13" element={<ProtectedRoute><Aarti13 /></ProtectedRoute>} />
          <Route path="/aarti14" element={<ProtectedRoute><Aarti14 /></ProtectedRoute>} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
