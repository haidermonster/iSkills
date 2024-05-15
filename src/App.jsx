import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import About from './Pages/About'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Portfolio from './Pages/Portfolio'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
          
          <Route path='/signin' element={<Signin />} />
          
          <Route path='/signup' element={<Signup/>} />
        </Routes>
       <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
