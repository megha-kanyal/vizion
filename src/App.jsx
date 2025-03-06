import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-yellow-500'>
      <h1 className='text-xl'>hello world</h1>
    </div>
  )
}

export default App
