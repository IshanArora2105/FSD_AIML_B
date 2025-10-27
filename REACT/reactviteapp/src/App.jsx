import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './Component/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <h2>CONTENT</h2>
      <div>
        <Profile />
      </div>
    </div>
  )
}

export default App
