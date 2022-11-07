
import './App.css';
import Company from './Company';
import Home from './Home'
import Header from './Header';
import FilterBy from './FilterBy';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="FilterBy" element={<FilterBy />} />
      </Routes>
    </div>
  );
}

export default App;
