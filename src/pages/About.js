import React, { useContext, useEffect } from 'react';
import { UserContext } from '../components/UserContext';
import Header from '../components/Header';

function About() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    document.title = 'Giới thiệu';
  }, []);

  return (
    <div>
      <Header title="Giới thiệu" />
      <p>Đây là ứng dụng React demo cơ bản</p>
      <p><strong>Người dùng hiện tại:</strong> {user.name} ({user.age} tuổi)</p>
    </div>
  );
}

export default About;
