import React, {useState} from 'react';

const Counter = (props) => {
    const [count, setCount] = useState(0);
    
    function increment() {
        setCount(count + 1);
    }
  
    function decrement() {
        setCount(count - 1);
    }
  
    return (
      <div className='card'>
        <h1 className="heading_large">{count} - {props.data?.title}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  };
  
  export default Counter;