import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import ProjectList from './components/ProjectList';
import Contact from './components/Files/Contact';
import Projects from './components/Files/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ProjectList" element={<ProjectList />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
  </Router>
);


