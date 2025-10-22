import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../components/UserContext';
import Counter from '../components/Counter';
import Header from '../components/Header';

function Home() {
  const { user, setUser } = useContext(UserContext);
  const [message, setMessage] = useState('Chào mừng bạn đến với React!');

  useEffect(() => {
    document.title = 'Trang chủ';
  }, []);

  return (
    <div>
      <Header title="Trang chủ" />
      <p className="lead">{message}</p>

      <section className="user-card">
        <p><strong>Người dùng:</strong> {user.name} ({user.age} tuổi)</p>
        <button
          onClick={() => setUser(prev => ({ ...prev, name: prev.name === 'Viet' ? 'Thai' : 'Viet' }))}
        >
          Đổi tên
        </button>
      </section>

      <Counter />
    </div>
  );
}

export default Home;
