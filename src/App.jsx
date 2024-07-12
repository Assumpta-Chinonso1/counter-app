import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  // Adding useEffect to update the document title whenever count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // The effect runs only when 'count' changes

  const add = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className='app'>
      <div className='count'>{count}</div>
      <div className='btns'>
        <button className='add' onClick={add}>+</button>
        <button className='minus' onClick={minus}>-</button>
      </div>
    </div>
  );
};

export default App;


