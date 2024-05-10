import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import './index.css'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      {/* <Slicker /> */}
      <Footer />
    </div>
  )
}

export default App
