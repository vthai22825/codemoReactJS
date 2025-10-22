import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Counter:', count);
    return () => {

    };
  }, [count]);

  return (
    <div className="counter">
      <h3>Bộ đếm: {count}</h3>
      <button onClick={() => setCount(prev => prev + 1)}>Tăng</button>
      <button onClick={() => setCount(0)}>Đặt lại</button>
    </div>
  );
}

export default Counter;
