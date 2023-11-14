import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tudo from './components/tudo/Tudo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Tudo/>
    </>
  )
}

export default App
