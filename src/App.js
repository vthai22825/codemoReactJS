import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import { UserContext } from './components/UserContext';

function App() {
  const [user, setUser] = useState({ name: 'Viet', age: 22 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <header className="app-header">
          <nav>
            <Link to="/">Trang chủ</Link>
            <span> | </span>
            <Link to="/about">Giới thiệu</Link>
          </nav>
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
