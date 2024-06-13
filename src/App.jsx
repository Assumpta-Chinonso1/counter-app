import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState (0)
  
  const add = () => {
    setCount(count + 1)
  }

  const minus = () => {
    setCount(count - 1)
  }


 
  return (
    <div className='app'>
      <div className='count'>{count}</div>
      <div className='btns'>
         <button className='add' onClick={add}>+</button>
         <button className='minus'onClick={minus}>-</button>
      </div>
    </div>
  )
}

export default App