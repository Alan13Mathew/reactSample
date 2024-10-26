import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import RouterMain from './router/router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterMain/>
    </>
  )
}

export default App
