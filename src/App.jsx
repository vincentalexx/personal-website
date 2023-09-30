import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import './index.css'
import Footer from './components/Footer'
import About from './components/About'
import Portfolio from './components/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Navbar />
      <About />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default App
