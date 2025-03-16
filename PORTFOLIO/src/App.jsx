import { useState } from 'react'
// import './App.css'
import Navbar from "./components/Navbar"
import Body from './components/Body'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
  )
}

export default App
